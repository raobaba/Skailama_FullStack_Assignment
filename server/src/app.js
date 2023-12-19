const express = require("express");
require("dotenv").config();
const ejs = require("ejs");
const cors = require("cors");
const errorMiddleware = require("./middlewares/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload"); 
const path = require("path");
const Connection = require('./config/db.js')
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true
  })
);
app.use(cors());
Connection();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is Running! 🚀");
  });
}

app.use(errorMiddleware);

module.exports = app;
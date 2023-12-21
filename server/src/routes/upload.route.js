const express = require("express");
const uploadRouter = express.Router();
const { createUpload, createDetails } = require("../controllers/upload.controller.js");

uploadRouter.post("/upload", createUpload); 
uploadRouter.post('/details/:uploadId/:fileId',createDetails);

module.exports = uploadRouter;

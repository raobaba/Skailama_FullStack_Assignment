const express = require("express");
const uploadRouter = express.Router();
const { createUpload, createDetails,updateDescription } = require("../controllers/upload.controller.js");

uploadRouter.post("/upload", createUpload); 
uploadRouter.post('/details/:uploadId/:fileId',createDetails);
uploadRouter.put('/update/:uploadId/:fileId/:detailsId',updateDescription)

module.exports = uploadRouter;

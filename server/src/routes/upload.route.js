const express = require("express");
const uploadRouter = express.Router();
const { createUpload, createDetails,updateDescription,getAllUpload } = require("../controllers/upload.controller.js");

uploadRouter.post("/upload", createUpload); 
uploadRouter.post('/details/:uploadId/:fileId',createDetails);
uploadRouter.put('/update/:uploadId/:fileId/:detailId',updateDescription)
uploadRouter.get('/getAll',getAllUpload)

module.exports = uploadRouter;

const express = require("express");
const uploadRouter = express.Router();
const {
  createUpload,
  createDetails,
  updateDescription,
  getAllUpload,
  getFilesByUploadId,
  getDetailsByFileId
} = require("../controllers/upload.controller.js");

uploadRouter.post("/upload/:userId", createUpload);
uploadRouter.post("/details/:uploadId/:fileId", createDetails);
uploadRouter.put("/update/:uploadId/:fileId/:detailId", updateDescription);
uploadRouter.get("/getAll/:userId", getAllUpload);
uploadRouter.get("/files/:uploadId", getFilesByUploadId);
uploadRouter.get('/details/:uploadId/:fileId',getDetailsByFileId);

module.exports = uploadRouter;

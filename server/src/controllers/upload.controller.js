const sendToken = require("../utils/sendToken");
const cloudinary = require("cloudinary");
const asyncHandler = require("../middlewares/asyncHandler.middleware.js");
const Upload = require("../models/upload.model.js");
const { uploadItems } = require("../constants.js");

const createUpload = asyncHandler(async (req, res) => {
  const { projectName } = req.body;
  const userId = req.cookies.userId;

  if (!userId) {
    return res
      .status(401)
      .json({ message: "Please login to perform this action." });
  }
  const newUpload = new Upload({
    projectName,
    files: uploadItems,
    userId,
  });

  const savedUpload = await newUpload.save();
  res.status(201).json({ upload: savedUpload });
});

const createDetails = async (req, res) => {
    const { uploadId, fileId } = req.params;
    const { name, description } = req.body;
    try {
      const upload = await Upload.findById(uploadId);
      if (!upload) {
        return res.status(404).json({ message: "Upload not found." });
      }
      const fileToUpdate = upload.files.id(fileId);
      if (!fileToUpdate) {
        return res.status(404).json({ message: "File not found." });
      }
      fileToUpdate.details.push({ name, description });
      await upload.save(); 
      res.status(200).json({ upload }); 
    } catch (err) {
      res
        .status(500)
        .json({ message: "Error saving details.", error: err.message });
    }
  };
  
module.exports = {
  createUpload,
  createDetails,
};

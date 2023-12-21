const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  projectName: {
    type: String,
    default:"Sample Project"
  },
  episode: {
    type: String,
    default: "4 episodes",
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  files: [
    {
      url: {
        type: String,
      },
      text: {
        type: String,
      },
      details: [
        {
          name: {
            type: String,
          },
          description: {
            type: String,
          },
        },
      ],
    },
  ],
});

const Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;

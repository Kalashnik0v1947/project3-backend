const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const claimSchema = new Schema(
  {
    title: { type: String, unique: true, required: true },

    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },

    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],

    upVoted: { type: [], required: true },

    downVoted: { type: [], required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Claim", claimSchema);

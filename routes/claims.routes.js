const { isAuthenticated } = require("../middleware/jwt.middleware");

const express = require("express");
const router = express.Router();

const User = require("../models/User.model");
const Claim = require("../models/Claim.model");
const Comment = require("../models/Comment.model");

router.get("/", (req, res) => {
  Claim.find()
    .populate("creator")
    .populate("comments")
    .then((results) => {
      console.log(results);
    });
});

module.exports = router;

const Post = require("../models/post_model");
const mongoose = require('mongoose')

/**
 * Gets all the posts
 * @param {http request} req
 * @param {http response} res
 */
const getAllPosts = (req, res) => {
  res.send("app get posts");
};

const createPost = async (req, res) => {
  console.log(req.body);

  const post = Post({
    Message: req.body.message,
    Sender: req.body.sender,
    _id: mongoose.Schema.Types.ObjectId,
  });

  try {
    newPost = await post.save();
    res.status(200).send(newPost);
  } catch (error) {
    res.status(400).send({
      status: "fail",
      err: error.message,
    });
  }
};

module.exports = {
  getAllPosts,
  createPost,
};

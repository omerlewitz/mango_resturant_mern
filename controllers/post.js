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

const getPostById = async (req, res) => {
  console.log("getPostById id: " + req.params.id);
  const id = req.params.id;
  if (id == null || id == undefined) {
    return res.status(400).send({ err: "no id provided" });
  }
  try {
    post = await Post.findById(id)
    if (post == null) {
      res.status(400).send({
        err: "post does not exists",
      });
    } else {
      res.status(200).send(post);
    }
  } catch (err) {
    res.status(400).send({
      "err": err.message,
    });
  }
};

const createPost = async (req, res) => {
  console.log(req.body);

  const post = Post({
    Message: req.body.message,
    Sender: req.body.sender,
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
  getPostById,
  createPost,
};

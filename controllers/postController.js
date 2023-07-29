// postController.js

const Post = require('../model/post');

// Controller to add a new post
const addPost = (req, res) => {
  const { title, body } = req.body;
  const post = new Post({ title, body });

  post
    .save()
    .then((savedPost) => {
      res.json(savedPost);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to create post.' });
    });
};

// Controller to get all posts
const getAllPosts = (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to fetch posts.' });
    });
};

module.exports = { addPost, getAllPosts };

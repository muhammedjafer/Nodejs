const express = require('express');
const postController = require('./controllers/postController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

// API route to add a new post
router.post('/post', postController.addPost);

// API route to get all posts
router.get('/posts', postController.getAllPosts);

module.exports = router;
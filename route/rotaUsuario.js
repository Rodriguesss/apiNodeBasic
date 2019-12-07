const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioController');

router.get('/posts', usuarioController.getPosts);
router.get('/posts/:id', usuarioController.getPostsOne);
router.post('/posts', usuarioController.postPosts);
router.put('posts/:id', usuarioController.putPost);
//router.get('/post/:id:/comments', usuarioController.getComments);
//router.get('/post/:id:/albums', usuarioController.getAlbums);
//router.patch('/posts/:id', usuarioController);
router.delete('posts/:id', usuarioController.deletePosts);

module.exports = router;
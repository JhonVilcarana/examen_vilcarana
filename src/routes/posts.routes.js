const { Router } = require ('express')
const router = Router();
const PostsCtrl = require ('../controllers/posts.controllers')
    router.get('/listar/', PostsCtrl.readPosts); 
    router.get('/listarID/:id', PostsCtrl.readPostsID);
    router.post('/create/', PostsCtrl.createPosts); 
    router.delete('/delete/:id', PostsCtrl.deletePosts); 
    router.put('/update/:id', PostsCtrl.updatePosts); 

module.exports = router;

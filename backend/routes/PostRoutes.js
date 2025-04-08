const express=require('express');
const router = express.Router();
const postController = require("../controller/post/Post");

router.get("/post",postController.getAllPosts);
router.post("/post",postController.postForm);
router.get("/post/:id",postController.getAllPostsById)
module.exports=router;

const express=require('express');
const router = express.Router();
const postController = require("../controller/post/Post");

router.get("/post",postController.getAllPosts);
router.post("/postForm",postController.postForm);

module.exports=router;

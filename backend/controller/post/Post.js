const postModal = require('../../modal/posts/PostsModal');
const PostModel = require("../../modal/posts/PostsModal");

exports.getAllPosts=async(req,res,next)=>{
    try{
        const allPosts=await postModal.find();
        res.status(200).json({
            allPosts
        })
    }catch(error){
        res.status(500).json({
        message:"Internal Server Error"
        })
        
    }

}

const postModal = require('../../modal/posts/PostsModal');


exports.getAllPosts=async(req,res,next)=>{
    try{
        const allPosts=await postModal.find().select("location disaster date time");
        res.status(200).json({
            allPosts
        })
    }catch(error){
        res.status(500).json({
        message:"Internal Server Error"
        })

    }
}

exports.postForm = async(req,res,next)=>{
    try{
        const userPost = new postModal(req.body);
        const savePost = await userPost.save();
        res.status(201).json(savePost);
    }
    catch{
        res.status(500).json({
            message:"Internal Server Error"
            });
    }
}

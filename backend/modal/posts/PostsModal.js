const mongoose =require('mongoose');
const PostSchema=new mongoose.Schema({
place:String,
disaster:String,
date:String,
time:String,
})
const PostModal=mongoose.model('post',PostSchema);
module.exports=PostModal;

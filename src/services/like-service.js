const { TweetRepository } = require('../repositories/index')
const {LikeRepository} = require('../repositories/index')
const { post } = require('../routes')
const tweetRepository = new TweetRepository()
const likeRepository = new LikeRepository()
const toggleLike = async (modelName, modelId, userId) => {
    // let exists = null
    if (modelName == "Tweet") {
     var post = await tweetRepository.getById(modelId)
        // console.log(post);

    }
    else if (modelName == "Comment") {
        // TODO
    }
    else {
        throw new Error("Unknown Model Type")
    }
//    exists.like.includes( )
    // if(exists)

   const data  =  {
        onModel:modelName,
        modelId:modelId,
        userId:userId
    }
const exists   = await likeRepository.find(data)
    console.log("Exists",exists)
if(exists )
{
    console.log("Removing like...");
    // Remove the like from the post
 
 
    const removeLike = await likeRepository.delete({_id:exists._id})
    // exists.remove()
    console.log("Deleted");
    post.likes.pull(...exists)
    await post.save()

    
}
else 
{
    console.log("Adding like...");
    const newlike = await likeRepository.create(data)
    post.likes.push(newlike)
    await post.save()


}
}

module.exports = {
    toggleLike
}
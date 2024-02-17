const {Tweet} = require('../models')

    const createTweet = async(data) =>{
        try {
            console.log(data)
            const response = await Tweet.create(data)
            return response
        } catch (error) {
            throw error
        }
    }
    // [
    //     { "content": { $regex: "content"} },
    //     { "content": { $regex: "condgrtent" } }
    // ]
    const get = async(data) =>{
        try {
            console.log(data)
            const response = await Tweet.find({
                $or: data
            });
            
            return response
        } catch (error) {

            throw error
        }
    }
    const updateById=async(tweetIdToUpdate,hashtagIdToAdd)=>{
        const response=await Tweet.findOneAndUpdate(
            { _id:tweetIdToUpdate  }, 
            { $addToSet: { hashtags: hashtagIdToAdd } } 
          
        );
        return response

    }

module.exports = {createTweet,get,updateById}
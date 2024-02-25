const {Tweet} = require('../models')
const CrudRepository = require('./crud-repository')
class TweetRepository  {
     

    
    async createTweet(data) {
        try {
            console.log("inside Repo",data)
            const response = await Tweet.create(data)
            return response
        } catch (error) {
            throw error
        }
    }
    async   get(data) {
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
    async getById(tweetId){
        try {
            console.log(tweetId)
            const response = await Tweet.findById({
                _id:tweetId
            })
            return response
        } catch (error) {
            throw error 
        }
    }
    async updateById(tweetIdToUpdate,hashtagIdToAdd){
        try {
            const response=await Tweet.findOneAndUpdate(
                { _id:tweetIdToUpdate  }, 
                { $addToSet: { hashtags: hashtagIdToAdd } } 
                
                );
                return response
        } catch (error) {
            throw error 
        }
  
            
        }
    }

module.exports = TweetRepository
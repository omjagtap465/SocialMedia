const {Hashtag} = require('../models')

    const createHashtag = async(data) =>{
        try {
            console.log(data)
            const response = await Hashtag.insertMany(data)
            return response
        } catch (error) {
            throw error
        }
    }
    const getByTagName = async(data) =>{
        try {
            console.log(data)
            const response = await Hashtag.find(data)
            return response
        } catch (error) {
            throw error
        }
    }
    const updateById = async(hashtagIdToUpdate,tweetIdToAdd) =>{
        try {
            
            const response = await Hashtag.findOneAndUpdate(
                { _id: hashtagIdToUpdate }, 
                { $addToSet: { tweets: tweetIdToAdd } } 
              
            );
            return response
        } catch (error) {
            throw error
        }
    }

module.exports = {createHashtag,getByTagName,updateById}
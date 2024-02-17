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

module.exports = {createTweet,get}
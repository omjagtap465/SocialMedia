const mongoose = require('mongoose');
const {Schema}  = mongoose
const {Hashtag}  =require('./hastag-model')
const TweetSchema = new Schema({
    content:{
        type:String,
        required:true,
    },
   hashtags:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:Hashtag
    }
   ]
    
},{
    versionKey:false
})
const Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = 
    Tweet

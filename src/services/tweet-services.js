const { TweetRepository, HashTagRepository } = require('../repositories/index')
const create = async (data) => {
    try {
 
        const str = data.content
        const response = await TweetRepository.createTweet(data)
        const hashtagsArr = str.match(/#([a-zA-Z])\w+/g)
        const hashtag = hashtagsArr.map(tag =>tag.substring(1)
          )
        let arr = []
        const regexQuery = hashtagsArr.map(element => {
            arr.push({ title: element })
            return { "content": { $regex: `${element.substring(1)}`, $options: "i" } }
        })
        
      
        console.log("Hashtag",hashtag);
        // console.log(regexQuery);
        await HashTagRepository.createHashtag(arr)
        const tweetswithHashtags  =await  TweetRepository.get(regexQuery)
        tweetswithHashtags.forEach(element => {
            hashtag.forEach(async(tag) =>{
                // console.log(element.content.contains(tag))            
                const sentence  = element.content
                
                    if(sentence.includes(tag))
                    {

                        const hashtagTitle =  await  HashTagRepository.getByTagName({title:`#${tag}`})
                        // console.log("title",hashtagTitle,element.id);
                        hashtagTitle.forEach(ele =>{
                           console.log(ele);
                           HashTagRepository.updateById(ele.id,element.id)
                        })
                    }
    
                
            })
        });
    //    console.log(tweetswithHashtags);


        // await TweetRepository.get()
        return response
    } catch (error) {
        throw error
    }
}

module.exports = { create }
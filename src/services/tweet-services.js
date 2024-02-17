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
        
      
        
        // console.log(regexQuery);
        await HashTagRepository.createHashtag(arr)
        const tweetswithHashtags  =await  TweetRepository.get(regexQuery)
        tweetswithHashtags.forEach(async (element) => {
            hashtag.forEach(async(tag) =>{
                // console.log(element.content.contains(tag))            
                const sentence  = element.content
                
                    if(sentence.includes(tag))
                    {

                        const hashtagTitle =  await  HashTagRepository.getByTagName({title:`#${tag}`})
                        // console.log("title",hashtagTitle,element.id);
                        hashtagTitle.forEach(async ele =>{
                          
                         const res = await  await  HashTagRepository.updateById(ele.id,element.id)
                         const updateTweedId = await TweetRepository.updateById(response.id,ele.id)     
                        
                        })
                    }
    
                
            })
            
// hashtag.forEach(async (tagName) => {
//         // console.log(tagName);
//        const content  =response.content
//        if(content.includes(tagName)){
//         const hashtagTitle =  await  HashTagRepository.getByTagName({title:`#${tagName}`})
//         hashtagTitle.forEach(async ele =>{
                          
//             const updateTweedId = await TweetRepository.updateById(response.id,ele.id)           
//             console.log(updateTweedId);
//            })
//         // console.log(hashtagTitle);
       

//        }
//     //
// })

        });
    //    console.log(tweetswithHashtags);


        // await TweetRepository.get()
        return response
    } catch (error) {
        throw error
    }
}

module.exports = { create }
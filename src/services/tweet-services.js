const { TweetRepository, HashTagRepository } = require('../repositories/index')
const Tweet =new  TweetRepository()
const create = async (data) => {

    try {



        const str = data.content
        const response = await Tweet.createTweet(data)
        const hashtagsArr = str.match(/#([a-zA-Z])\w+/g)
        const existingHashtag = await HashTagRepository.getByTagName(hashtagsArr)
        console.log(existingHashtag)
        const hashtag = existingHashtag.map(tag => tag.title)
        const currentHashtags = hashtagsArr.filter(tag => !hashtag.includes(tag))
        const newHashtags = currentHashtags.map(tag => ({ title: tag }))

           const  createdHashtag = newHashtags ?await HashTagRepository.createHashtag(newHashtags):[]
     
        const hashID = [...existingHashtag, ...createdHashtag].map(tag => tag.id)


        hashID.forEach(async (hashId) => {
            await HashTagRepository.updateById(hashId, response.id)
        })


        return response
    } catch (error) {
        throw error
    }
}

module.exports = { create }
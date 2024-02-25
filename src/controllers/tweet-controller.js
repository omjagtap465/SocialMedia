const { tweetService } = require("../services")
const createTweet = (req, res) => {
    try {
        const data = req.body
        const response = tweetService.create(data)
        res.status(201).json(response);

    } catch (error) {
        throw error
    }
}
module.exports = {createTweet}
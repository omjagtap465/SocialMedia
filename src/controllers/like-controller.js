const { likeService } = require("../services");

const toggleLike = (req, res) => {
    try {
        const data = req.query
        const response =likeService.toggleLike(data.modelname,data.modelid,data.userid)
        res.status(201).json(response);
    } catch (error) {
        throw error
    }
}
module.exports = { toggleLike }

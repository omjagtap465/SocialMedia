const express = require('express')
const router = express.Router()
const { tweetController, likeController, registerController, loginController, commentController } = require('../../controllers/index')
const verifyJwt = require('../../middlewares/login-middleware')
router.post('/register', registerController.register)
router.post('/login', loginController.signIn)
router.use(verifyJwt)
router.post('/tweet', tweetController.createTweet)
router.post('/togglelike', likeController.toggleLike)
router.post('./comment', commentController.createComment)


module.exports = router
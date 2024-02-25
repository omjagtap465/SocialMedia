const { UserRepository } = require('../repositories/index')
// const { post } = require('../routes')
const userRepository = new UserRepository()
// const likeRepository = new LikeRepository()
const register = async (email,password,username) => {

    let user = await userRepository.find({
        email:email
    })

    if (user != null) {
        return {
            "message":"user already exists"
        }
    }

    let response = await userRepository.create({
        email,
        password,
        username
    })

    delete await response["password"]

    return response

}

module.exports = {
    register
}
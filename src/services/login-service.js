const { UserRepository } = require('../repositories')
const { JWT_KEY } = require('../configs/ServerConfig')
var jwt = require('jsonwebtoken');
const userRepository = new UserRepository()
const signIn = async (user) => {
  try {
    const response = await userRepository.find({
      email: user.email
    })
    console.log("Service Layer", response);
    const passwordMatch = checkPassword(user.password, response.password)
    console.log("Password Match", passwordMatch);
    if (!passwordMatch) {
      console.log("Password Doesnt Match");
      throw { error: "Incorrect Password" }

    }
    const newToken = await createToken({ email: response.email, id: response.id })
    console.log(newToken);
    return { token: newToken }
  }
  catch (error) {
    throw error
  }
}
const checkPassword = (password, dbPassword) => {
  try {
    console.log(password, dbPassword);
    if (password == dbPassword) {

      return true;
    }

  } catch (error) {
    console.log("Something went wrong Incorrect Password");
    throw error
  }

}
const createToken = async (userData) => {
  try {

    const token = jwt.sign(userData, JWT_KEY);
    return token

  } catch (error) {
    console.log(error);
    throw error
  }
}
module.exports = { signIn }
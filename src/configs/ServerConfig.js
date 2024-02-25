const dotenv = require('dotenv')
dotenv.config()
module.exports = {
    MONGO_CONNECTION_URL: process.env.MONGO_CONNECTION_URL,
    PORT : process.env.PORT,
    JWT_KEY: process.env.JWT_KEY

}
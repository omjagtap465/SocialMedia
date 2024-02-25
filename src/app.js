

const express = require('express')
const app = express()
const {connectDB} = require('./configs/config');
const bodyParser = require('body-parser');
const {Tweet} = require('./models/index')

const { PORT } = require('./configs/ServerConfig');
const apiRoutes  = require('./routes/index');
const { create } = require('./services/tweet-services');
const { UserRepository,TweetRepository } = require('./repositories/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes)
app.listen(PORT,async (req, res) => {
  await  connectDB();
 
//   const response = await Tweet.findById({
//     _id:
// })
// const tweet =new TweetRepository()
// const id = '65d8ce6a1ffbc53bfefd2ede'
//   const response =await tweet.getById(id)
//   console.log(response);
  // create()
//  const user = new  UserRepository()
// await  user.create({email:"omjagtap465",password:"12345",username:"omjagtap"})
    console.log(`Sucessfully started the server on ${PORT}`);
})



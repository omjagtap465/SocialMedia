
const express = require('express')
const app = express()
const port =5500
const {connectDB} = require('./configs/config');
const{create} = require('./services/tweet-services');
const { get } = require('./repositories/tweet-repository');
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,async  () => {
 await  connectDB();






// hashtags.shift()
// console.log(hashtags);
  console.log(`Example app listening on port ${port}`)
})
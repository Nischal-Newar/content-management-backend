//import modules
require('./db/mongoose')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const userRouter = require('./routers/user')
const postRouter = require('./routers/posts')

//read .env file
dotenv.config();

//setup server
const port=process.env.PORT || 8443
const app=express()

//cors setup
var allowlist = [`${process.env.host}`]
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Referer')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
app.use(cors(corsOptionsDelegate))

//parse incoming json
app.use(express.json())

//setup routers
app.use(userRouter)
app.use(postRouter)

app.listen(port, () => {
    console.log("Server is up and running on port ",port);
});
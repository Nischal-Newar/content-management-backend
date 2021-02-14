//import modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//read the .env file
dotenv.config();

//configure connection with databse using Mongoose
mongoose.connect(`mongodb://${process.env.DATABASE_URL}/${process.env.DATABSE_NAME}`,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log(`connection to database established`)
}).catch(err => {
    console.log(`db error ${err.message}`)
    process.exit(-1)
})
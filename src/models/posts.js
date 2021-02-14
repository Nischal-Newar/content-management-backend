//import modules
const mongoose = require('mongoose')
const validation = require('validator')

const Post = mongoose.model('Post',{
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validation.isEmail(value))
                throw new Error('Email is invalid');
        }
    },
    post:{
        type: [
            new mongoose.Schema({
                name:{type: String, required: true},
                title: {type: String, required: true},
                description: {type: String, required: true},
                time: {type: Date, default: Date.now()}
            })
        ],
        required: true
    }
})

module.exports = Post
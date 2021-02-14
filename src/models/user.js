//import modules
const mongoose = require('mongoose')
const validation = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validation.isEmail(value))
                throw new Error('Email is invalid');
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 10,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    tokens: [{
        token:{
            type: String,
            required: true
        }
    }]
})

//redact the sensitive information
userSchema.methods.toJSON = function () {
    const userObject = this.toObject()
    delete userObject.password
    delete userObject.tokens
    delete userObject._id
    delete userObject.__v
    return userObject
}

//generate Token for user
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({_id: user._id.toString()},'tokengeneration')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

//check the username and password
userSchema.statics.findByCredentials = async (email,password) => {
    const user = await User.findOne({email})
    if(!user){
        throw new Error('Unable to login.')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw new Error('Unable to login.')
    }
    return user
}

//hashing plane text password for the user during signup
userSchema.pre('save', async function (next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 8)
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')

//setup router
const userRouter = new express.Router()

//signup
userRouter.post('/api/signup', async (req,res) => {
    const user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateAuthToken();
        res.status(201).send({user, token})
    }catch(e){
        res.status(400).send({
            "error": e.message
        })
    }
})

//signin
userRouter.post('/api/signin', async (req,res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({user,token})
    }catch(e){
        res.status(400).send({
            "error": e.message
        })
    }
})

//logout
userRouter.get('/api/logout',auth, async(req,res) => {
    try{
        req.user.tokens = req.user.tokens.filter((authToken) => {
                return authToken.token !== req.token
        })
        await req.user.save()
        res.status(200).send()
    }catch(e){
        res.status(500).send()
    }
})

//current information
userRouter.post('/api/logoutAll',auth,async(req,res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send()
    }catch(e){
        res.status(500).send()
    }
})

module.exports = userRouter
const express = require('express')
const auth = require('../middleware/auth')
const Post = require('../models/posts')

//setup router
const postRouter = new express.Router()

//get post by username
postRouter.get('/api/posts/:email',auth, async(req,res) => {
    const email = req.params.email;
    try{
        const posts = await Post.find({"email": email},{_id:0,__v:0})
        
        if(posts.length === 0){
            return res.status(404).send({
                "data": "No Posts found. Please create your first post to view it."
            })
        }
        res.status(200).send(posts);
    }catch(e){
        res.status(400).send({
            "error" : e.message
        })
    }
})

//add and update post for user in database
postRouter.post('/api/posts',auth, async(req,res) => {
    try{
        const newpost = new Post(req.body);
        const updatedData = await Post.updateOne(
                {email: req.body.email},
                {$push: {post: req.body.post}}
            )
        if(updatedData.nModified === 0){
            await newpost.save()
            return res.status(200).send()
        }
        res.status(204).send()
    }catch(e){
        res.status(500).send({
            "error": e.message
        })
    }
})

//get all the posts
postRouter.get('/api/allpost', async(req,res) => {
    try{
        const posts = await Post.find({},{_id:0,__v:0})
        if(posts.length === 0){
            return res.status(404).send({
                "data": "No post found."
            })
        }
        res.status(200).send(posts);
    }catch(e){
        res.status(400).send({
            "error" : e.message
        })
    }
})

module.exports = postRouter
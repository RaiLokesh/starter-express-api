const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireuserLogin = require('../middleware/requireuserLogin')
const Post = mongoose.model('Post')
const Org = mongoose.model("Org")

router.get('/user/:id',requireuserLogin,(req, res)=>{
    Org.findOne({_id:req.params.id})
    .select("-password")
    .then(user=>{
        Post.find({postedBy:req.params.id})
        .populate("postedBy","name _id")
        .exec((err,posts)=>{
            if(err){
                return res.status(422).json({error:err})
            }
            res.json({user, posts})
        })
    }).catch(err=>{
        return res.status(404).json({error:"User not found"})
    })
})

module.exports = router
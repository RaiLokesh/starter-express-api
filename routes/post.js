const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const requireuserLogin = require('../middleware/requireuserLogin')
const Post = mongoose.model('Post')

router.get('/allpost',requireuserLogin, (req, res)=>{    //new middleware here
    Post.find()
    .populate("postedBy", "name _id")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/createpost',requireLogin, (req, res)=>{
    const {title, body} = req.body
    if(!title || !body){
        return res.status(422).json({error:"Please Add all details"})
    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        //photo:req.user.pic,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})

    })
    .catch(error=>{
        console.log(error)
    })
    
})

router.get('/mypost',requireLogin, (req, res)=>{
    console.log(req.user)
    Post.find({postedBy:req.user._id})
    .populate("postedBy", "_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router
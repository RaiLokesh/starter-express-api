const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const requireuserLogin = require('../middleware/requireuserLogin')
const Post = mongoose.model('Post')

router.get('/allpost',requireuserLogin, (req, res)=>{    
    Post.find()
    .populate("postedBy", "_id name")
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

router.put('/apply', requireuserLogin, (req, res)=>{
    
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{appliedBy:req.user._id, name:req.user.name}
    },{
        new:true
    })
    .populate("postedBy", "_id name")
    .exec((err, result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
router.put('/unapply', requireuserLogin, (req, res)=>{

    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{appliedBy:req.user._id, name:req.user.name}
    },{
        new:true
    })
    .populate("postedBy", "_id name")
    .exec((err, result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

router.delete('/deletepost/:postid',requireLogin, (req, res)=>{
    
    Post.findOne({_id:req.params.postid})
    .populate("postedBy", "_id")
    
    .exec((err, post)=>{
        if (err||!post){
            return res.status(422).json({error:err})

        }
        if (post.postedBy._id.toString() === req.user._id.toString()){
            post.remove()
            .then(result=>{
                res.json({message:"Successfully deleted"})
            }).catch(err=>{
                console.log(err)
            })
        }
    })
})

module.exports = router
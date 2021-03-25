const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Org = mongoose.model("Org")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET1} = require('../keys')
const {JWT_SECRET2} = require('../keys')
const requireLogin = require('../middleware/requireLogin')



router.post('/signupdev', (req, res)=>{
    const {name, email, password} = req.body
    if(!email || !password || !name){
        return res.status(422).json({error:"All feilds are required!"})
        
    }
    //after successful posting
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"Email already exists!"})
        }

        bcrypt.hash(password, 12)
        .then(hashedpassword=>{
            const user = new User({
                email:email,
                password:hashedpassword,
                name:name
            })

            user.save()
            .then(user=>{
                res.json({message:"saved successfully"})
            })
            .catch(error=>{
                console.log(error)
            })
        })
        
    })
    .catch(error=>{
        console.log(error)
    })
})

router.post('/signuporg', (req, res)=>{
    const {name, email, password} = req.body
    if(!email || !password || !name){
        return res.status(422).json({error:"All feilds are required!"})
        
    }
    //after successful posting
    Org.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"Email already exists!"})
        }

        bcrypt.hash(password, 12)
        .then(hashedpassword=>{
            const user = new Org({
                email:email,
                password:hashedpassword,
                name:name
            })

            user.save()
            .then(user=>{
                res.json({message:"saved successfully"})
            })
            .catch(error=>{
                console.log(error)
            })
        })
        
    })
    .catch(error=>{
        console.log(error)
    })
})

router.post('/signindev', (req, res)=>{
    const {email, password} = req.body
    if(!email || !password){
        return res.status(422).json({error:"All fields are important!"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            res.status(422).json({error:"Invalid Email or Passowrd"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"Successful Signup"})
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET1)
                const {_id,name,email}=savedUser
                
                res.json({token, user:{_id,name,email}})
            }
            else{
                res.status(422).json({error:"Invalid Email or Passowrd"})
            }
        })
        .catch(error=>{
            console.log(error)
        })
           
    })
})
router.post('/signinorg', (req, res)=>{
    const {email, password} = req.body
    if (!email || !password){
        return res.status(422).json({error:"All feilds are important"})
    }
    Org.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            res.status(422).json({error:"Invalid Email or Passowrd"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"Successful Signup"})
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET2)
                const {_id, email} = savedUser
                res.json({token, user:{_id,email}})
            }
            else{
                res.status(422).json({error:"Invalid Email or Passowrd"})
            }
        })
        .catch(error=>{
            console.log(error)
        })
           
    })
})
module.exports = router
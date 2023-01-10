const jwt = require('jsonwebtoken')
const {JWT_SECRET2} = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('Org')

module.exports = (req, res, next)=>{
    const {authorization} = req.headers
    //authorization looks like: Bearer anjsnsnoaj
    if (!authorization){
        return res.status(401).json({error:"You must be logged in"})
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, JWT_SECRET2, (error, payload)=>{
        if(error){
            return res.status(401).json({error:"You must be logged in"})
        }

        const {_id} = payload
        User.findById(_id)
        .then(userdata=>{
            req.user = userdata
            next()
        })
        
    })
}
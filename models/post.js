const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    body:{
        type:String,
        required: true
    },
    photo:{
        type:String,
        default: "no photo" //remove default and add required=true when get img from profile
    },
    appliedBy:[{type:ObjectId, ref:"User"}],
    postedBy:{
        type:ObjectId,
        ref:"Org"
    }
})


mongoose.model("Post",postSchema)
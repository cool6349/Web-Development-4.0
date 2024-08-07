const mongoose = require("mongoose")

//schema
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    gender: {type: String},
    city: {type: String}

}, {timestamps:true})


//model
const User = mongoose.model("users",userSchema)

module.exports = User
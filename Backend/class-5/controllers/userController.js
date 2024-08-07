// Importing model
const User = require("../models/userModel");

const mongoose = require("mongoose");

// Create a user

const createUser = async (req, res) => {
       const { name, email, gender, city } = req.body;
       if (!name || !email || !gender || !city) {
              res.json({ msg: "Please fill the details" })
       }

       try {
              const newUser = await User.create({ name, email, gender, city })
              res.json({ msg: "User create succesfully" })
       }

       catch (error) {
              console.error(error)
       }
}

const getuser = async (req, res) => {
       try {
              const alluser = await User.find({});
              
              res.json(alluser);
       } catch (error) {
              console.error(error)
       }
}

module.exports = {createUser,getuser}

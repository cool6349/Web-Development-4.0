//import for module

const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

// create server
const app = express();

//middlewares
app.use(express.json());  //

//schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true,
    },
},
{timeStamps: true});

//Model
const Students = mongoose.model("students",studentSchema);

//connection
mongoose.connect(process.env.MONGODBURL).then(()=>console.log("mongodb connect succesfully")).catch((error) => console.log("Error",error));

//routs
app.get("/" , (req,res) =>{
    res.json("API works properly");
});


//create a user
app.post("/api/post", async(req, res) => {
    const {name, email } = req.body;
    if(!email || !name){
        res.status(400).json({msg: "please fill the details"})
    }

    else{
        await Students.create({name , email});
        res.status(201).json({msg : "Succuesfully!"})
    }
  });


//start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});



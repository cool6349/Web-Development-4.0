const express = require("express");

const {createUser,getuser} = require("../controllers/userController");


const router = express.Router();

// Routes
router.post("/createuser", createUser);

router.get("/getuser", getuser);







module.exports = router

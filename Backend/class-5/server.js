//Impodrting modules
const express = require("express")
require("dotenv").config();
const connectBD = require("./config/db")
const router = require("./routes/userRoutes");

//create a server
const app = express();

//Middleweres
app.use(express.json());

//Connection to MongoDB
connectBD()

//Routes
app.use("/api",router);
app.get("/", (req, res) => {
    res.json({msg:"API is working"})
});




//Run the server
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});
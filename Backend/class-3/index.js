// import modules
const express = require("express");
const fs = require("fs");
require("dotenv").config();
const greeting = require("./data");

const readData = () =>{
  const data = fs.readFileSync("./data.json");
  return JSON.parse(data);
}
const writeData = () =>{
fs.writeFileSync("./data.json", JSON.stringify(data), null, 2);
  
}

// setup server
const app = express();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  greeting();
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello from server" });
  // res.end("Bye from server");
});

app.get("/service", (req, res) => {
  res.json({ msg: "Hello from service" });
});

app.get("/write", (req, res) => {
  const myName = "Rudra Prasad Nahak";
  fs.writeFileSync("logs.txt", myName);
  res.json({ msg: "Successfully created" });
});

app.get("/read", (req, res) => {
  const data = fs.readFileSync("./logs.txt", "utf-8");
  res.send(data);
});

app.get("/append", (req, res) => {
  const sentence = "I am a SDE-I";
  fs.appendFileSync("./logs.txt", sentence);
  res.json({ msg: "Successfully created" });
});

app.post("/post", (req, res) => {
  const user = req.body;
  fs.appendFileSync("./logs.txt", JSON.stringify(user));
  res.send(user);
});

//get all users
app.get("/users", (req, res) => {
  const users = readData();
  res.end(users);
 
});

// get user by id

app.get("/users/:id", (req, res) => {
  let { id } = req.params;
  const users = readData();
  const user = users.find((user, i) => {
    return user.id === parseInt(id);
  });

  if (!user) {
    res.send(`User not found!`);
  } else {
    res.send(user);
  }
});

// edit the users info

app.put("/users/:id", (req, res) => {
  let { id } = req.params;
  const users = readData();
  const userid = users.findIndex((user, i) => {
    return user.id === parseInt(id);
  });

  if (!userid !== -1) {
    
    users[userid] = { id: users[userid], ...req.body };
    writeData(users);
    res.send(users[userid]);
  }
  else{
    res.send(`User not found!`);
  }
});

// delete a user

app.delete("/users/:id", (req, res) => {
  let { id } = req.params;
  const users = readData();
  const userid = users.filter((user, i) => {
    return user.id !== parseInt(id);
  });

  if (userid !== -1) {
    // users[userid] = { id: users[userid], ...req.body };
    writeData(users);
    // res.send(users[userid]);
    res.json({ msg: "Data deleted successfully" });
  } else {
    res.send(`User not found!`);
  }
});

// app.get("/:id", (req, res) => {
//   const user = req.body;
//   res.send(user);
//   fs.writeFileSync("./logs.txt", JSON.stringify(user));
// });

//start the server
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

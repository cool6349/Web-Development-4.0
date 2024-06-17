/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Show() {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");

  const [username, setUsername] = useState("");
  const [username2, setUsername2] = useState("");

  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  setUsername2(username);
  setEmail2(email);
  setPassword2(password);
  
}
  return (
    <div>
      <h1>Update Your Name Here: {name2} </h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter your name here"
      />
      <button onClick={() => setName2(name)}>Add your name</button>


     <div className="form">
      <input 

      value={username}
      onChange={(e) => setUsername(e.target.value)}
      type="text" placeholder="Username"></input>

      <input 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type="text" placeholder="email"></input>

      <input 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type="text" placeholder="password"></input>
      <button onClick={handleSubmit} >submit</button>
      </div>

      <div className="list_item">
        <ul>
          <li>{username2}</li>
          <li>{email}</li>
          <li>{password}</li>
        </ul>
        
        </div>  
      
    </div>

    // {make a form inclue username,email,password and a submit button. After submit show it on ui}
  );
}

export default Show;
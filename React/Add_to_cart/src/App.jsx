import React, { useState } from 'react'
import Navbar from "./components/NavBar";
import Shop from "./components/Shop";


const App = () => {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    console.log(item);
  }
  
  return (
    <div>
      <Navbar size={cart.length}/>
      <Shop handLeClick={handleClick}/>
    </div>


  )
}

export default App

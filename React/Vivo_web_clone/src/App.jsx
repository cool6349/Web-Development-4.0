import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Components/Home";
import Community from "./Components/Community";
import E_Store from "./Components/E_Store";
import Explore from "./Components/Explore";
import Funtouchos from "./Components/Funtouchos";
import Iqoo from "./Components/Iqoo";
import Products from "./Components/Products";
import Vivostore from "./Components/VivoStore";
import Support from "./Components/Support";

import Search from "./assets/Search.svg";
import profile from "./assets/profile.svg";

import './App.css'

function App() {


  return (
    <BrowserRouter>

      <div>
      
        <header>
        <div className="img_container">
          <nav>
            <div className='logo'>
              <h1>vivo</h1>
            </div>
            <ul>

              <li>
                <Link className="underline"to="/"> Home</Link>
              </li>
              <li>
                <Link className="underline"to="Products">Products</Link>
              </li>
              <li>
                <Link className="underline" to="E_Store">E-Store</Link>
              </li>
              <li>
                <Link className="underline "to="VivoStore">Vivo Exclusive Store</Link>
              </li>
              <li>
                <Link className="underline"to="Community">Community</Link>
              </li>
              <li>
                <Link className="underline"to="Support">Support</Link>
              </li>
              <li>
                <Link className="underline"to="Funtouchos">Funtouch OS</Link>
              </li>
              <li>
              <Link className="underline"to="Explore">Explore</Link>
              </li>
              <li>
              <Link className="underline"to="Iqoo">iqoo</Link>
              </li>
            </ul>

            <div className="account">
            <img height={20} src={Search} alt="" />
            <img height={20} src={profile} alt="" />
              
            </div>
          </nav>
          <button class="button-30" role="button">Buy Now</button>
          
          </div>

        <div className="div2">
              
            </div>
          
        </header>
        

      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/E_Store" element={<E_Store />} />
          <Route path="/Funtouchos" element={<Funtouchos />} />
          <Route path="/Iqoo" element={<Iqoo />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Vivostore" element={<Vivostore />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
};

export default App;

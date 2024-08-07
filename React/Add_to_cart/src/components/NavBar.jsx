import React from 'react'
import cart from "../assets/cart.png";
import "../styles/navbar.css";
export const NavBar = ({size}) => {
    return (
        <nav>
            <div className='Nav_box'>
                <span className='my_shop'> Shopi_fy</span>
                <div className="cart">
                    <span>
                        <img src={cart}  alt=""/>
                    </span>
                    
                    <span>{size}</span>
                    
                </div>
                </div>
        </nav>

    )
}

export default NavBar
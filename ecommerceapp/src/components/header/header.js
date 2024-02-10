import React from "react";
import "./header.css"

import Cart from "../../assets/icons/cart.png";

function Header(){
    return(
        <header>
            <div className="headerarea">
                <div className="headerlogo">
                    <h1>eCommerce</h1>
                </div>
                <div className="headerinput">
                    <input type="text" placeholder="Procure um produto"></input>
                </div>
                <div className="headerlogin">
                    <p>Login</p>
                </div>
                <div className="header-cart">
                    <img src={Cart} alt="cart"></img>
                    <p>Cart</p>
                </div>
            </div>
            
        </header>
    )
}


export default Header;
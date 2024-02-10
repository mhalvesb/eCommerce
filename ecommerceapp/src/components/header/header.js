import React from "react";
import "./header.css"

import Cart from "../../assets/icons/cart.png";
import User from "../../assets/icons/user.png";

function Header(){
    return(
        <header>
            <div className="headerarea">
                <div className="headerlogo">
                    <h1>eCommerce</h1>
                </div>
                <div className="headercategories">
                        <select>
                            <option selected disabled>Categorias</option>
                            <option>Blusas</option>
                            <option>Calças</option>
                            <option>Shorts</option>
                            <option>Sapatos</option>
                        </select>
                </div>
                <div className="headerinput">
                    <input type="text" placeholder="Procure um produto"></input>
                </div>
                <div className="headerlogin">
                    <img src={User} alt="user"></img>
                    <p>Login</p>
                </div>
                <div className="headercart">
                    <img src={Cart} alt="cart"></img>
                    <p>Cart</p>
                </div>
            </div>
            
        </header>
    )
}


export default Header;
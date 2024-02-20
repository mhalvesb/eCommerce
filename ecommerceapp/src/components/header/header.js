import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css"

import Cart from "../../assets/icons/cart.png";
import User from "../../assets/icons/user.png";

function Header(){

    const history = useNavigate();
    const location = useLocation();
    const [categoriaSelect, atualizarCateg] = useState("");
    const searchParams = location.pathname;

    console.log(searchParams);
    const handleSelecionarCategoria = (event) =>{
        
        const categoria = event.target.value;

       
        if(categoria !== categoriaSelect){
            atualizarCateg(categoria);
            
        }
    }



    return(
        <header>
            <div className="headerarea">
                <div className="headerlogo">
                    <h1>eCommerce</h1>
                </div>
                <div className="headercategories">
                        <select value={categoriaSelect} onChange={handleSelecionarCategoria}>
                            <option value="" selected disabled>Categorias</option>
                            
                            <option value="blusas">Blusas</option>
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
import React, {useState, useEffect} from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./header.css"

import Cart from "../../assets/icons/cart.png";
import User from "../../assets/icons/user.png";
import Main from "../../containers/main/main.js";

import Carts from "../cart/cart.js";
import { Axios } from "axios";




function Header({items}){
    
    const [cartItems, setCartItems] = useState(items);
    const [cartId, setCartId] = useState(1);
    const [user, setUser] = useState();

    useEffect(()=>{
        const userDataString = localStorage.getItem('user');
        
        if(userDataString){
            setUser(JSON.parse(userDataString));
        }
    }, [])
    
    
    useEffect(()=>{
        setCartItems(items);
    })


    const history = useNavigate();
    const location = useLocation();
    const [categoriaSelect, atualizarCateg] = useState("");
    const searchParams = location.pathname;
    const [carrinho, selecionarCarrinho] = useState(false);


    const handleSelecionarCategoria = (event) =>{
        const categoria = event.target.value;
        atualizarCateg(categoria);
        localStorage.setItem("categoriaSelect", categoria);
        if(`/${categoria}` == searchParams){

        }else{
            history(`/${categoria}`);
        }
    }
    const handleClickCart = () => {
        selecionarCarrinho(false);
    }
    useEffect(()=>{
        const categoriaSalva = localStorage.getItem("categoriaSelect");
        if(categoriaSalva){
            atualizarCateg(categoriaSalva);
        }
        if(`/${categoriaSalva}` !== searchParams){
            atualizarCateg(`${searchParams.substring(1)}`);
            
        }
    })


    const handleLogout = () =>{
        localStorage.removeItem("user");
        window.location.reload();
    }

    const handleLogin = () =>{
        window.location.href = "/login"
    }

    const handleCartClick = (event) =>{
        selecionarCarrinho(true);
    }

    return(
        <header>
            <Carts show={carrinho} handleClickCart={handleClickCart} items={cartItems}/>
            <div className="headerarea">
                <div className="headerlogo">
                <h1><Link to="/">eCommerce</Link></h1>
                </div>
                <div className="headercategories">
                        <select value={categoriaSelect} onChange={handleSelecionarCategoria}>
                            <option  value="">Inicio</option>
                            <option value="blusas">Blusas</option>
                            <option value="calcas">Calças</option>
                            <option value="shorts">Shorts</option>
                            <option value="sapatos">Sapatos</option>
                        </select>
                </div>
                <div className="headerinput">
                    <input type="text" placeholder="Procure um produto"></input>
                </div>
                
                    <div className="headerlogin logins">
                        <img src={User} alt="user"></img>
                        {user ? user.email : <p onClick={handleLogin}>Login</p>}
                    </div>
                
                <div>
                        {user ? <button className="logout" onClick={handleLogout}>Logout</button> : ""}
                    </div>
                <div className="headercart" onClick={handleCartClick}>
                    <img src={Cart} alt="cart"></img>
                    <p>Cart</p>
                </div>
            </div>
            
        </header>
    )
}


export default Header;
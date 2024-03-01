import React from "react";
import "./cart.css";

import Blusa from "../../assets/images/blusabranca.avif";


function Cart({show, handleClickCart, items}){
    let cartItems = items;
    console.log(cartItems);
    return(
        <div className="cart" style={{display: show ? "flex" : "none"}}>
            <div className="cartarea">
                <h3>Carrinho</h3>
                <ul>

                    {items ? items.map((item, index)=>{
                        return(
                        
                            <li key={index}>
                            <img src={item.image} alt="item"></img>
                            <p className="itemname">{item.name}</p>
                            <p className="itemprice">R$ {item.price}</p>
                            <div className="itemcount">
                                <button>-</button>
                                <p className="itemnumber">1</p>
                                <button>+</button>
                            </div>
                    </li>
                        
                        )
                    }): <div>Nada</div>}


                </ul>
                <div className="total">
                    <p>R$ 100,00</p>
                </div>
            </div>
            <div className="cartbuttons">
                <button onClick={handleClickCart}>Sair</button>
                <button>Comprar</button>
            </div>
            
        </div>
    )
}


export default Cart;
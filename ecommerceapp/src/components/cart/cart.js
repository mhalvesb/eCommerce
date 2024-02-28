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
                            <img src={Blusa} alt="item"></img>
                            <p className="itemname">Camisa branca</p>
                            <p className="itemprice">R$ 90,00</p>
                            <div className="itemcount">
                                <button>-</button>
                                <p className="itemnumber">1</p>
                                <button>+</button>
                            </div>
                    </li>
                        
                        )
                    }): <div>Nada</div>}


                </ul>
                
            </div>
            <div className="cartbuttons">
                <button onClick={handleClickCart}>Sair</button>
                <button>Comprar</button>
            </div>
            
        </div>
    )
}


export default Cart;
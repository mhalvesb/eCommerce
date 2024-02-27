import React from "react";
import "./cart.css";

import Blusa from "../../assets/images/blusabranca.avif";


function Cart({show, handleClickCart}){


    return(
        <div className="cart" style={{display: show ? "flex" : "none"}}>
            <div className="cartarea">
                <h3>Carrinho</h3>
                <ul>

                    <li>
                        <img src={Blusa} alt="item"></img>
                        <p className="itemname">Camisa branca</p>
                        <p className="itemprice">R$ 90,00</p>
                        <div className="itemcount">
                            <button>-</button>
                            <p className="itemnumber">1</p>
                            <button>+</button>
                        </div>
                    </li>


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
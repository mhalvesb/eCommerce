import React from "react";
import "./cart.css";

import Blusa from "../../assets/images/blusabranca.avif";


function Cart({show, handleClickCart, items}){
    let cartItems = items;
    
    
    let totalValue = () => {
        let total = 0;
        if(cartItems){
            cartItems.forEach((item) =>{
                total += parseFloat(item.price);
            })
        };
        return total;
    }

    totalValue();

    console.log(totalValue());

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
                
            </div>
            <div className="total">
                    <p>Total: R$ {totalValue()}</p>
                </div>
            <div className="cartbuttons">
                <button onClick={handleClickCart}>Sair</button>
                <button>Comprar</button>
            </div>
            
        </div>
    )
}


export default Cart;
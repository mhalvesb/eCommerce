import React from "react";


import Blusa from "../../assets/images/blusabranca.avif";


function Cart(){
    return(
        <div className="cart">
            <div className="cartarea">
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
        </div>
    )
}


export default Cart;
import React from "react";



import Blusa from "../../assets/images/blusabranca.avif"

import "./carrinho.css";



function Carrinho(){
    return(
        <div className="carrinho-area">
            <div className="side1">
                
                <div className="item">
                    <img src={Blusa} alt="image"></img>
                    <div className="item-options">
                        <h4>Blusa branca masculina</h4>
                        <div className="items-qtd">
                            <p>Quantidade</p> <button>-</button> <p>1</p> <button>+</button>
                        </div>
                    </div>
                    <div className="more">
                        <img src="" alt="image"></img>
                        <p>199</p>
                    </div>
                </div>
            </div>
            <div className="side2">

            </div>
        </div>
    )
}



export default Carrinho;
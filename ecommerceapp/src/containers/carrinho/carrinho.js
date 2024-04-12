import React, {useState} from "react";

import Header from "../../components/header/header.js";

import Blusa from "../../assets/images/blusabranca.avif"

import TrashIcon from "../../assets/icons/trash.png";

import "./carrinho.css";



function Carrinho(){

    const storageItem = localStorage.getItem("cartItem");
    const initialItem = storageItem ? JSON.parse(localStorage.getItem("cartItem")) : [];
    const [cartItems, setCartItems] = useState(initialItem);

    
    return(



        
<div className="container-area">

        <Header hidden={true} items={cartItems}/>
        <div className="cart-text">
            <h1>SACOLA</h1>
        </div>
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
                        <img src={TrashIcon} alt="image"></img>
                        <div className="money">
                            <p>R$</p> 
                            <p>199</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side2">
                <div className="cep">
                    <h2>Calcule o preço do frete</h2>
                    <div className="cepcalc">
                        <input type="text" placeholder="Digite o seu cep"></input>
                        <button>Calcular frete</button>
                    </div>
                </div>

                <div className="resume">
                    <p>Resumo do pedido</p>
                    <div className="resumetext">
                        <p>Total: </p><p>R$ 199</p>
                    </div>

                    
                </div>
                <div className="buy">
                        <button>Comprar agora</button>
                    </div>
            </div>
        </div>
    </div>
    )
}



export default Carrinho;
import React, { useState } from "react";



import "./payment.css";

import Header from "../../components/header/header.js";
import { Step } from "../../components/steps/step";


function Payment(){
    const storageItem = localStorage.getItem("cartItem");
    const initialItem = storageItem ? JSON.parse(localStorage.getItem("cartItem")) : [];
    const [cartItems, setCartItems] = useState(initialItem);


    return(
        <div>
            <Header items={cartItems} hidden={true}></Header>

            <Step stepTwo={true}></Step>

            <div className="row1">
                <h1>Suas informações</h1>
                    <div className="inputsInformations">
                        <div className="inputs">
                            <input type="text" ></input>
                            <p>Nome</p>
                        </div>
                        <div className="inputs">
                            <input type="text" ></input>
                            <p>Endereço</p>
                        </div>
                        <div className="inputs">
                            <input type="text" ></input>
                            <p>CEP</p>
                        </div>
                        <div className="inputs">
                            <input type="text" ></input>
                            <p>Cidade</p>
                        </div>
                        <div className="inputs">
                            <input type="number"></input>
                            <p>Telefone</p>
                        </div>
                    </div>
                </div>
            <div className="row2">
                <h1>Dados do seu Cartão</h1>
                <div className="cardInformations">
                    <input type="text" placeholder="Digite o nome do dono do cartão"></input>
                    <input type="number" placeholder="Numero do Cartão"></input>
                    <input type="number" placeholder="CVC"></input>
                    <input type="number" placeholder="data de validade"></input>
                </div>
            </div>
        </div>
    )
}



export default Payment;
import React, { useState } from "react";



import "./payment.css";

import Header from "../../components/header/header.js";
import { Step } from "../../components/steps/step";


function Payment(){
    const storageItem = localStorage.getItem("cartItem");
    const initialItem = storageItem ? JSON.parse(localStorage.getItem("cartItem")) : [];
    const [cartItems, setCartItems] = useState(initialItem);


    return(
        <div className="paymentContainer">
            <Header items={cartItems} hidden={true}></Header>

            <Step stepTwo={true}></Step>

            <div className="informs">
                <div className="row1">
                    <div className="rowText">
                        <h1>Suas informações</h1>
                        <img src="https://www.svgrepo.com/show/355009/form-edit.svg"></img>
                        </div>
                        <div className="inputsInformations">
                            <div className="inputs">
                                <input type="text" required ></input>
                                <p>Nome</p>
                            </div>
                            <div className="inputs">
                                <input type="text" required></input>
                                <p>Endereço</p>
                            </div>
                            <div className="inputs">
                                <input type="text" required></input>
                                <p>CEP</p>
                            </div>
                            <div className="inputs">
                                <input type="text" required></input>
                                <p>Cidade</p>
                            </div>
                            <div className="inputs">
                                <input type="number" required></input>
                                <p>Telefone</p>
                            </div>
                        </div>
                    </div>
                <div className="row2">
                    <div className="rowText">
                        <h1>Dados do cartão</h1>
                        <img src="https://www.svgrepo.com/show/522503/card-ok.svg"></img>
                    </div>
                    <div className="inputsInformations">
                        <input type="text" placeholder="Digite o nome do dono do cartão"></input>
                        <input type="number" placeholder="Numero do Cartão"></input>
                        <input type="number" placeholder="CVC"></input>
                        <input type="number" placeholder="data de validade"></input>
                    </div>
                </div>
                <div className="column1">
                    <h2>Resumo da compra</h2>
                    <p>1 Blusa branca, 2 Calças</p>
                    <div className="subTotal">
                        <h5>Subtotal:</h5>
                        <h4>R$ 100,00</h4>
                    </div>
                    <div className="subTax">
                        <h5>Taxa de segurança</h5>
                        <h4>R$ 10,00</h4>
                    </div>
                    <div className="total">
                        <h5>Total:</h5>
                        <h4>R$ 110,00</h4>
                    </div>

                <button>Concluir a compra</button>
                </div>
        </div>

       


    </div>
    )
}



export default Payment;
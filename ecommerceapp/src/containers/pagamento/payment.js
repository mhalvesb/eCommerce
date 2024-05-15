import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import "./payment.css";

import Header from "../../components/header/header.js";
import { Step } from "../../components/steps/step";
import Footer from "../../components/footer/footer";


function Payment(){
    const Navigate = useNavigate();
    const storageItem = localStorage.getItem("cartItem");
    const initialItem = storageItem ? JSON.parse(localStorage.getItem("cartItem")) : [];
    const [cartItems, setCartItems] = useState(initialItem);

    
    const subTotal = () =>{
        let total = 0;
        cartItems.forEach((item) =>{
            total += parseFloat(item.price) * item.qtd;
        });
        return total;
    }


    const subTaxt = () =>{
        let total = 0;
        cartItems.forEach((item) =>{
            total += parseFloat(item.price) * item.qtd;
        });

        return total / 10;
    }

    const totalValue = () =>{


        let subTotal = 0;
        cartItems.forEach((item) =>{
            subTotal += parseFloat(item.price) * item.qtd;
        });

        let subTax = 0;
        cartItems.forEach((item) =>{
            subTax += parseFloat(item.price) * item.qtd;
        });
        
         return (subTotal + (subTax / 10));
    }

    const resumo = () =>{
        let resumeItems = "";
        cartItems.forEach((item) =>{
           resumeItems += `${item.qtd} ${item.name}, `;
        });
        return resumeItems;
    }
    


    function handleBuySuccess(){
        Navigate("/success")
    }

    useEffect(() =>{
        if(cartItems.length == 0){
            Navigate("/");
            }
    }, [Navigate]);

    return(
        <div className="paymentContainer">
            <Header items={cartItems} hidden={true}></Header>

            <Step stepTwo={true}></Step>

        <form action="" method="" onSubmit={() => handleBuySuccess()}>
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
                                <div className="inputs">
                                    <input type="text" required></input>
                                    <p>Nome do titular</p>
                                </div>
                                <div className="inputs">
                                    <input type="number" required></input>
                                    <p>Número do cartão</p>
                                </div>
                                <div className="inputs">
                                    <input type="number" required></input>
                                    <p>CVC</p>
                                </div>
                                <div className="inputs">
                                    <input type="text" required></input>
                                    <p>Data de validade</p>
                                </div>
                    </div>
                </div>
                <div className="column1">
                    <h2>Resumo da compra</h2>
                    <p>{resumo()}</p>
                    <div className="line"></div>
                    <div className="subTotal">
                        <h5>Subtotal:</h5>
                        <h4>R$ {subTotal()}</h4>
                    </div>
                    <div className="line"></div>
                    <div className="subTax">
                        <h5>Taxa de segurança:</h5>
                        <h4>R$ {subTaxt()}</h4>
                    </div>
                    <div className="line"></div>
                    <div className="total">
                        <h5>Total:</h5>
                        <h4>R$ {totalValue()}</h4>
                    </div>

                <button>Concluir a compra</button>
                </div>
        </div>
           </form>

       

        <Footer></Footer>
    </div>
    )
}



export default Payment;
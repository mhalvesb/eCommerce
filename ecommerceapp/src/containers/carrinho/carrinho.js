import React, {useState} from "react";

import {useNavigate} from "react-router-dom"

import Header from "../../components/header/header.js";

import Blusa from "../../assets/images/blusabranca.avif"

import TrashIcon from "../../assets/icons/trash.png";
import Sacola from "../../assets/icons/sacola-de-compras-aberta.png";

import "./carrinho.css";
import { Step } from "../../components/steps/step.js";
import Footer from "../../components/footer/footer.js";



function Carrinho(){
    const Navigate = useNavigate();
    const storageItem = localStorage.getItem("cartItem");
    const initialItem = storageItem ? JSON.parse(localStorage.getItem("cartItem")) : [];
    const [cartItems, setCartItems] = useState(initialItem);
    let valueLength;
    let inputCepValue = "";

    const handleCepValue = (e) =>{
        if(e.target.value.length == 6){
            console.log("ok");
            e.target.value = e.target.value.slice(0, 5);

        } else if(e.target.value.length == 5 && !e.target.value.includes("-")){
            e.target.value += "-";
            
        } 
        console.log(e.target.value.length);
        console.log();

    }

    const totalValue = () =>{
        let total = 0;
        cartItems.forEach((item) =>{
            total += parseFloat(item.price) * item.qtd;
        })
        return total;
    }



    function handleBuy(){
        if(cartItems.length > 0){
            Navigate("/payment");
        }
    }
    
    return(



        
<div className="container-area">

        <Header hidden={true} items={cartItems}/>

        <Step stepOne={true} stepTwo={false} stepThree={false}/>
        
        <div className="cart-text">
            <h1>SACOLA</h1>
        </div>
        <div className="carrinho-area"> 
            <div className="side1">
                {cartItems ? cartItems.map((item, index) =>{
                    const handleIncrease = () =>{
                       if(item.qtd >= 1){
                        const updateItems = [...cartItems];
                        if(updateItems[index].qtd > 0){
                            updateItems[index].qtd++;
                            setCartItems(updateItems);
                        }
                       }
                    }
                
                    const handleDecrease = () =>{
                        if(item.qtd > 1){
                            const updateItems = [...cartItems];
                            if(updateItems[index].qtd > 0){
                                updateItems[index].qtd--;
                                setCartItems(updateItems);
                            }
                        }
                    }

                    const removeItem = () =>{
                        const updateItems = [...cartItems];
                        updateItems.splice(index, 1);
                        setCartItems(updateItems);
                    }

                    return(
                    <div className="item" key={index}>
                        <img src={item.image} alt="image"></img>
                        <div className="item-options">
                            <h4>{item.name}</h4>
                            <div className="items-qtd">
                                <p>Quantidade</p> <button onClick={handleDecrease}>-</button> <p>{item.qtd}</p> <button onClick={handleIncrease}>+</button>
                            </div>
                        </div>
                        <div className="more">
                            <img src={TrashIcon} onClick={removeItem} alt="image"></img>
                            <div className="money">
                                <p>R$</p> 
                                <p>{parseFloat(item.price) * item.qtd}</p>
                            </div>
                        </div>
                </div>
                   
                   )}) : <div><h1>Nada</h1></div>}

                    {cartItems.length == 0 ? 
                    <div className="sacolavazia">
                        <img src={Sacola}></img>
                        <p>Sua sacola está vazia</p>
                        </div> : ""}
                   
            </div>
            <div className="side2">
                <div className="cep">
                    <h2>Calcule o preço do frete</h2>
                    <div className="cepcalc">
                        <input type="text" onChange={handleCepValue} maxLength="9" placeholder="Digite o seu cep"></input>
                        <button>Calcular frete</button>
                    </div>
                </div>

                <div className="resume">
                    <p>Resumo do pedido</p>
                    <div className="resumetext">
                        <p>Total: </p><p>R$ {totalValue()}</p>
                    </div>

                    
                </div>
                <div className="buy">
                        <button onClick={() => handleBuy()}>Comprar agora</button>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
    )
}



export default Carrinho;
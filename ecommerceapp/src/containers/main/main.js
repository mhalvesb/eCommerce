import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";

import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";
import "./main.css";


import Cart from "../../components/cart/cart.js";

import Blusa from "../../assets/images/blusabranca.avif";
import BlusaPreta from "../../assets/images/camisapreta.png";
import CalcaPreta from "../../assets/images/calcapreta.jpg";



import Delivery from "../../assets/icons/delivery.png";
import Discount from "../../assets/icons/discount.png";
import Support from "../../assets/icons/support.png";



function Main(){
    const storageItem = JSON.parse(localStorage.getItem("cartItem"));
    const initialItem = storageItem ? JSON.parse(localStorage.getItem("cartItem")): [];
    const [cartItems, setCartItems] = useState(initialItem);

    const [cartId, setCartId] = useState(1);

 

    
    const addToCart = (productName, productPrice, productImage) =>{
            const existingItem = cartItems.find(item => item.name === productName);
            
            if(existingItem){
                const updateItem = cartItems.map((item) =>{
                    if(item.name === productName){
                        return item.qtd += 1;
                    } else{
                        return item;
                    }
                    setCartItems([...cartItems, updateItem]);
                });

                

            } 
            else 
            {
                const newItem = 
            {
                id: cartId,
                name: productName,
                price: productPrice,
                image: productImage,
                qtd : 1
            };
            setCartItems([...cartItems, newItem]);
            }

            
           

            

            



            setCartId(cartId + 1);
            
    }

    useEffect(()=>{
        localStorage.setItem("cartItem", JSON.stringify(cartItems));
    });

    



    return(
        <div>
            <Header items={cartItems}/>
            
            <main>
                <section className="bannerarea">
                    <div className="banner">
                    <div className="bannertext">
                        <h1></h1> 
                            <span className="anim"></span>
                        
                        <button>Comprar agora</button>
                    </div>
                    </div>
                </section>
            

            <div className="mainbar">
                <div className="mainarea">
                    <div className="ic1"><img src={Delivery} alt=""></img>Entrega rápida para todo o Brasil</div>
                    <div className="ic1"><img src={Discount} alt=""></img>Ganhe ofertas e descontos nos produtos</div>
                    <div className="ic1"><img src={Support} alt=""></img>Suporte funcionando 24/7</div>
                </div>
            </div>

            <section>
                <div className="products">
                    <h3 className="productpromotion">Promoções do mês</h3>
                    <div className="productarea">

                       
                       <div className="product">
                       <Link to="/roupas/blusabranca">
                            <img src={Blusa} alt="blusa"></img>
                            <h4>Blusa branca Masculina</h4>
                            <p>R$ 90,00</p>
                        </Link>
                            <button onClick={() => addToCart("Blusa branca Masculina", "90,00", Blusa)}>Comprar</button>
                        </div>
                       

                       
                        <div className="product">
                        <Link to="/roupas/calcapreta">
                                <img src={CalcaPreta} alt="blusa"></img>
                                <h4>Calça preta Masculina</h4>
                                <p>R$ 120,00</p>
                        </Link>
                                <button onClick={() => addToCart("Calça preta Masculina", "120,00", CalcaPreta)}>Comprar</button>
                            </div>
                       

                        
                            <div className="product">
                            <Link to="/roupas/blusapreta">
                                <img src={BlusaPreta} alt="blusa"></img>
                                <h4>Blusa preta Masculina</h4>
                                <p>R$ 100,00</p>
                            </Link>
                                <button onClick={() => addToCart("Blusa preta Masculina", "100,00", BlusaPreta)}>Comprar</button>
                            </div>
                        


                    </div>
                </div>
            </section>
            </main>
            <Footer/>

           
        </div>
        
    )
}

export default Main;
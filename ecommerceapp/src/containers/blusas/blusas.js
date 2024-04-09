import React, {useState} from "react";

import {Link} from "react-router-dom";

import "./blusas.css";

import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";


import Blusa from "../../assets/images/blusabranca.avif";
import Blusapreta from "../../assets/images/camisapreta.png";
import Blusaturquesa from "../../assets/images/floralturquesa.jpg";
import Azulpreto from "../../assets/images/gradienteazulpreto.png";
import Pretovermelho from "../../assets/images/gradientepretovermelho.png";


function Blusas(){
    const storageItem = localStorage.getItem("cartItem");
    const initialItem = storageItem ? JSON.parse(localStorage.getItem("cartItem")) : [];
    const [cartItems, setCartItems] = useState(initialItem);


    const addToCart = (productName, productPrice, productImage) =>{
        const newItem = {
            name: productName,
            price: productPrice,
            image: productImage,
            qtd: 1
        }

        setCartItems([...cartItems, newItem]);
    }

    return(
        <div>
            <Header items={cartItems}/>
            
                <main>
                    <section className="blusassection">

                        <h3 className="blusastext">Blusas</h3>

                        <div className="blusasproductarea">

                            <div className="blusasproduct">
                                <Link to="/roupas/blusabranca">
                                <img src={Blusa} alt="blusa"></img>
                                <h4>Blusa branca masculina</h4>
                                <p>R$ 180,00</p>
                                </Link>
                                <button onClick={addToCart("Blusa branca masculina", "180,00", Blusa)}>Comprar</button>
                            </div>

                            <div className="blusasproduct">
                                <Link to="/roupas/blusapreta">
                                <img src={Blusapreta} alt="blusa"></img>
                                <h4>Blusa preta masculina</h4>
                                <p>R$ 150,00</p>
                                </Link>
                                <button onClick={addToCart("Blusa preta masculina", "150,00", Blusapreta)}>Comprar</button>
                            </div>

                            <div className="blusasproduct">
                                <Link to="/roupas/blusaflorturquesa">
                                <img src={Blusaturquesa} alt="blusa"></img>
                                <h4>Blusa flor turquesa masculina</h4>
                                <p>R$ 240,00</p>
                                </Link>
                                <button onClick={addToCart()}>Comprar</button>
                            </div>

                            <div className="blusasproduct">
                                <Link to="/roupas/azulmasculina">
                                <img src={Azulpreto} alt="blusa"></img>
                                <h4>Blusa gradiente azul masculina</h4>
                                <p>R$ 300,00</p>
                                </Link>
                                <button>Comprar</button>
                            </div>

                            <div className="blusasproduct">
                                <Link to="/roupas/gradiente">
                                <img src={Pretovermelho} alt="blusa"></img>
                                <h4>Blusa gradiente masculina</h4>
                                <p>R$ 300,00</p>
                                </Link>
                                <button>Comprar</button>
                            </div>


                        </div>
                    </section>
                </main>

                <Footer/>
        </div>
    )
}



export default Blusas;
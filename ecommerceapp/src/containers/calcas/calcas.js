import React, {useEffect, useState} from "react";
import "./calcas.css";


import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";


import Calca from "../../assets/images/calcapreta.jpg";

function Calcas(){

    const storageItem = localStorage.getItem("cartItem");
    const initialItem = storageItem ? JSON.parse(localStorage.getItem("cartItem")) : [];
    const [cartItems, setCartItems] = useState(initialItem);


    const handleBuy = (img, name, value, qtd) =>{
        const newItem = {
            id: 1,
            image: img,
            name: name,
            price: value,
            qtd: 1
        }

        console.log("ok");

        setCartItems([...cartItems, newItem]);
    }

    useEffect(() =>{
        localStorage.setItem("cartItem", JSON.stringify(cartItems));
    })

    return(
        <div>
            <Header items={cartItems}/>
             <main>
            <section className="calcassection">
                <h3 className="calcastext">Calças</h3>

                <div className="calcasproductarea">

                    <div className="calcasproduct">
                        <img src={Calca} alt="calca"></img>
                        <h4>Calça branca</h4>
                        <p>R$ 280,00</p>
                        <button onClick={() => handleBuy(Calca, "Calça Branca", "280,00", 1)}>Comprar</button>
                    </div>

                </div>

            </section>

        </main>

        <Footer/>
        </div>
       
    )
}


export default Calcas;
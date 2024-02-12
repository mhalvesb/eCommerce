import React from "react";

import Header from "../../components/header/header.js";

import "./main.css";

import Delivery from "../../assets/icons/delivery.png";
import Discount from "../../assets/icons/discount.png";
import Support from "../../assets/icons/support.png";

function Main(){
    return(
        <div>
            <Header/>
            <main>
            <section className="banner">
                <div className="bannertext">
                    <h1></h1>
                </div>
            </section>

            <div className="mainbar">
                <div className="mainarea">
                    <div className="ic1"><img src={Delivery} alt=""></img>Entrega rápida para todo o Brasil</div>
                    <div className="ic1"><img src={Discount} alt=""></img>Ganhe ofertas e descontos nos produtos</div>
                    <div className="ic1"><img src={Support} alt=""></img>Suporte funcionando 24/7</div>
                </div>
            </div>
            </main>
        </div>
        
    )
}

export default Main;
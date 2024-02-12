import React from "react";

import Header from "../../components/header/header.js";

import "./main.css";



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
                <div className="ic1">Entrega rápida para todo o Brasil</div>
                <div className="ic1">Ganhe ofertas e descontos nos produtos</div>
                <div className="ic1"></div>
            </div>
            </main>
        </div>
        
    )
}

export default Main;
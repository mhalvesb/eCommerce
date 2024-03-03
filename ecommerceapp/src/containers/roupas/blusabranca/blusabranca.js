import React from "react";

import "./blusabranca.css";

import Header from "../../../components/header/header.js";
import Footer from "../../../components/footer/footer.js";

import Blusa from "../../../assets/images/blusabranca.avif";

function BlusaBranca(){



    return(
        <div>
            <Header/>
            <section>
            <div className="roupa">
                <div className="roupaarea">
                    <div className="firstrow">
                        <div className="roupaimg">
                            <img src={Blusa} alt="roupa"></img>
                        </div>
                        <div className="roupatext">
                            <h1>Blusa branca masculina</h1>
                            <hr></hr>
                            <p>R$ 200,00</p>

                            <div className="color"><p className="grey">Cor: </p> <p>Branca</p> 
                            <div className="colorradius">
                                <div className="colorarea"></div>
                            </div>
                            </div>

                            <button className="addCart">Adicionar ao carrinho</button>
                            <label>Consultar o frete</label>
                            <input type="text" placeholder="Digite seu cep"></input> 
                            <button>OK</button>
                        </div>
                    </div>
                    <div className="secrow">
                        <p>Descrição</p>
                    </div>
                    
                </div>
            </div>
            </section>

            <Footer/>
        </div>
        
    )
}


export default BlusaBranca;
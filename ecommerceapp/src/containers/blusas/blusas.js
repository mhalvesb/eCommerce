import React from "react";


import "./blusas.css";

import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";


import Blusa from "../../assets/images/blusabranca.avif";
import Blusapreta from "../../assets/images/camisapreta.png";
import Blusaturquesa from "../../assets/images/floralturquesa.jpg";
import Azulpreto from "../../assets/images/gradienteazulpreto.png";
import Pretovermelho from "../../assets/images/gradientepretovermelho.png";


function Blusas(){
    return(
        <div>
            <Header/>
            
                <main>
                    <section className="blusassection">

                        <h3 className="blusastext">Blusas</h3>

                        <div className="blusasproductarea">

                            <div className="blusasproduct">
                                <img src={Blusa} alt="blusa"></img>
                                <h4>Blusa branca masculina</h4>
                                <p>R$ 180,00</p>
                                <button>Comprar</button>
                            </div>

                            <div className="blusasproduct">
                                <img src={Blusapreta} alt="blusa"></img>
                                <h4>Blusa preta masculina</h4>
                                <p>R$ 150,00</p>
                                <button>Comprar</button>
                            </div>

                            <div className="blusasproduct">
                                <img src={Blusaturquesa} alt="blusa"></img>
                                <h4>Blusa flor turquesa masculina</h4>
                                <p>R$ 240,00</p>
                                <button>Comprar</button>
                            </div>

                            <div className="blusasproduct">
                                <img src={Azulpreto} alt="blusa"></img>
                                <h4>Blusa gradiente azul masculina</h4>
                                <p>R$ 300,00</p>
                                <button>Comprar</button>
                            </div>

                            <div className="blusasproduct">
                                <img src={Pretovermelho} alt="blusa"></img>
                                <h4>Blusa gradiente masculina</h4>
                                <p>R$ 300,00</p>
                                <button>Comprar</button>
                            </div>

                            <div className="blusasproduct">
                                <img src={Blusa} alt="blusa"></img>
                                <h4>Blusa branca masculina</h4>
                                <p>R$ 180,00</p>
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
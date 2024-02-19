import React from "react";


import "./blusas.css";

import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";


import Blusa from "../../assets/images/blusabranca.avif";

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
                                <h4>Blusa branca</h4>
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
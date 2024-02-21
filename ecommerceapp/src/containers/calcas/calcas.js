import React from "react";



import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";


import Calca from "";

function Calcas(){
    return(
        <div>
             <main>
            <section className="calcassection">
                <h3 className="calcastext">Calças</h3>

                <div className="calcasproductarea">
                    <div className="calcasproduct">
                        <img src={Calca} alt="calca"></img>
                        <h4>Calça branca</h4>
                        <p>R$ 280,00</p>
                        <button>Comprar</button>
                    </div>

                </div>

            </section>

        </main>
        </div>
       
    )
}


export default Calcas;
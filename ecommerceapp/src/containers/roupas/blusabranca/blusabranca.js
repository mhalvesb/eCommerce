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
                            <div className="price">
                                <h1>Blusa branca masculina</h1>
                                <hr></hr>
                                <p>R$ 200,00</p>
                                <div className="juros">
                                    <p>10x de R$ 20,00 sem juros no cartão de crédito</p>
                                </div>
                            </div>
                            

                            <div className="color"><div className="colortxt"><p className="grey">Cor:</p> <p>Branca</p></div> 
                            <div className="colorradius">
                                <div className="colorarea"></div>
                            </div>
                            </div>
                            <div className="sizes">
                                <p>Tamanho</p>
                                <ul>
                                    <li>38</li>
                                    <li>40</li>
                                    <li>42</li>
                                    <li>44</li>
                                    <li>46</li>
                                </ul>
                            </div>
                            <button className="addCart">Adicionar ao carrinho</button>
                            <div className="frete">
                                <label>Consultar o frete</label>
                                <br></br>
                                <input type="text" placeholder="Digite seu CEP"></input> 
                                <button>OK</button>
                            </div>
                            
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
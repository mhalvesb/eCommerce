import React from "react";
import Roupas from "../roupas.js";
import Img from "../../../assets/images/blusabranca.avif";

function BlusaBrancas(){
    const name = "Blusa branca masculina"
    const price = 200
    return(
        <Roupas name={name} img={Img} price={price}/>
    )
    
}


export default BlusaBrancas;
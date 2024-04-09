import React from "react";

import img from "../../../assets/images/gradienteazulpreto.png";

import Roupas from "../roupas.js";

function AzulMasculina(){
    const name = "Blusa gradiente azul masculina"
    const price = 300

    return(
        <Roupas name={name} img={img} price={price}/>
    )
}


export default AzulMasculina
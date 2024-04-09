import React from "react";

import img from "../../../assets/images/gradientepretovermelho.png";

import Roupas from "../roupas.js";

function Gradiente(){
    const name = "Blusa gradiente masculina"
    const price = 300

    return(
        <Roupas name={name} img={img} price={price}/>
    )
}


export default Gradiente
import React from "react";

import img from "../../../assets/images/floralturquesa.jpg";

import Roupas from "../roupas.js";

function Blusaturquesa(){
    const name = "Blusa turquesa masculina"
    const price = 240

    return(
        <Roupas name={name} img={img} price={price}/>
    )
}


export default Blusaturquesa
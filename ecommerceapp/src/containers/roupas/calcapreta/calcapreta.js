import React from "react";

import img from "../../../assets/images/calcapreta.jpg";

import Roupas from "../roupas.js";

function Calcapreta(){
    const name = "Calça preta masculina"
    const price = 120

    return(
        <Roupas name={name} img={img} price={price}/>
    )
}


export default Calcapreta
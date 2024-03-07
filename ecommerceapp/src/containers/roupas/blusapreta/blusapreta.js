import React from "react";


import Img from "../../../assets/images/camisapreta.png";
import Roupas from "../roupas.js";

function BlusaPreta(){
    const name = "Blusa preta masculina"
    const price = 200

    return(
        <Roupas name={name} price={price} img={Img}/>
    )
}


export default BlusaPreta;
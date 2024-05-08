import success from "../../assets/icons/check.png";

import "./buy.css";

export function Buys(){

    return(
        <div className="successBuy">
            <img src={success}></img>
            <h1>Obrigado pela sua compra</h1>
            <p>O seu pedido foi aceito, para acompanhar verifique sua caixa de e-mail</p>


            <h4>Você será redirecionado para página principal em 5 segundos...</h4>
        </div>
    )
}
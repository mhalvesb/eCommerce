import success from "../../assets/icons/check.png";
import {Step} from "../../components/steps/step.js";
import {useNavigate} from "react-router-dom";
import "./buy.css";

export function Buys(){
    const Navigate = useNavigate();
    setTimeout(() =>{
        Navigate("/");
    }, 5000)

    return(
        <div className="successBuy">
            <Step stepThree={true}/>
            <img src={success}></img>
            <h1>Obrigado pela sua compra</h1>
            <p>O seu pedido foi aceito, para acompanhar verifique sua caixa de e-mail</p>
            <h4>Você será redirecionado para página principal em 5 segundos...</h4>
        </div>
    )
}
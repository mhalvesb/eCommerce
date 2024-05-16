import React, {useState, useEffect} from "react";
import Header from "../../components/header/header.js";
import {useLocation, useNavigate} from "react-router-dom";
import Axios from "axios";
import Message from "../../components/message/message.js";
import {Link} from "react-router-dom";
import "./login.css";
import axios from "axios";



function Login(){
    if(localStorage.getItem("user")){
        window.location.href = "/"
        navigate("/");
    }
    console.log(process.env.SERVER_LOGIN);
    const navigate = useNavigate();
    const location = useLocation();
    const [messageSuccess, setMessageSuccess] = useState("");
    const [messageFailure, setMessageFailure] = useState("");

    
    


    const loginSub = async (e) =>{
        e.preventDefault();
        try{
            const formData = new FormData(e.target);
            const email = formData.get('email');
            const senha = formData.get('senha');
            const response = await Axios.post(process.env.SERVER_LOGIN, {
                email: email,
                senha: senha
            });
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/");
            } catch(error){
                const errorMessage = process.env.SERVER_LOGIN;
                
               // window.location.href = "/login?error=" + errorMessage;
            }
    }


    useEffect(() =>{
        const urlParams = new URLSearchParams(window.location.search);
        const error = urlParams.get("error");
        if(error){
            setMessageFailure(error);
        }
    })


    return(
        <div className="login-area">

            <div className="log-1">
                <h2>A melhor plataforma de roupas</h2>
                <br></br>
                <br></br>

                <h1>Ficamos felizes em  <br></br>te ver  novamente</h1>
                <br></br>
                <br></br>
                <h1>Faça login e obtenha das <br></br>melhores promoções de roupas</h1>
            </div>

            <div className="log-2">
                {messageFailure && <Message type="failure" msg={messageFailure}/>}

                <div className="login-container">
                        <h2>Ecommerce</h2>
                        <h1>Bom ver você novamente</h1>
                    <form onSubmit={(e) => loginSub(e)}>
                        <div className="inputarea">

                            <input type="text" name="email" id="emails" required></input>
                            <p>Seu e-mail</p>

                        </div>
                        <div className="inputarea">

                            <input type="password" name="senha" id="pass" required></input>
                            <p>Sua senha</p>

                        </div>
                        
                        <button>Fazer login</button>
                        <div className="login-nav">
                            <Link to="/singup">Não possui uma conta?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default Login;
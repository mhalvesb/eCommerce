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
    
    const navigate = useNavigate();
    const location = useLocation();
    let message = "";


    
    
    if(location.state){
        message = location.state.message
    }


    const loginSub = async (e) =>{
        e.preventDefault()
        try{
            const formData = new FormData(e.target);
            const email = formData.get('email');
            const senha = formData.get('senha');

            const responses = await Axios.post("http://localhost:8080/login", {
                email: email,
                senha: senha
            }).then((response)=>{
                console.log(response.data.user);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/");
            });

            
        } catch(error){

        }
    
    }





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
                {message && <Message type="success" msg={message}/>}

                <div className="login-container">
                        <h2>Ecommerce</h2>
                        <h1>Bom ver você novamente</h1>
                    <form action="" method="POST" onSubmit={loginSub}>
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
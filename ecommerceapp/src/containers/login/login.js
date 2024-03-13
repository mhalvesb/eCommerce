import React from "react";


import {Link} from "react-router-dom";

import "./login.css";



function Login(){
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
               
                <div className="login-container">
                        <h2>Ecommerce</h2>
                        <h1>Bom ver você novamente</h1>
                    <form action="" method="post">
                        <div className="inputarea">
                            <input type="email" name="emails" id="emails" required></input>
                            <p>Seu e-mail</p>
                        </div>
                        <div className="inputarea">
                            <input type="password" name="pass" id="pass" required></input>
                            <p>Sua senha</p>
                        </div>
                        <div className="login-nav">
                            <Link to="">Não possui uma conta?</Link>
                            <Link to="">Criar uma conta</Link>
                        </div>
                        <button>Fazer login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default Login;
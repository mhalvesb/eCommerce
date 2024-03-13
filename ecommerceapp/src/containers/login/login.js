import React from "react";


import {Link} from "react-router-dom";

import "./login.css";



function Login(){
    return(
        <div className="login-area">
            <h2>Ecommerce</h2>
            <h1>Bom ver você novamente</h1>
            <div className="login-container">
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
    )
}



export default Login;
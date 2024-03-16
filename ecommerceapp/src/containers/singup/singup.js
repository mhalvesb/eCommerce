import React from "react";


import {Link} from "react-router-dom";

import "./singup.css";



function Singup(){
    
        return(
            <div className="singup-area">
                <div className="sig-1">
                    <div className="singup-container">
                    <h2>Ecommerce</h2>
                        <h1>Boas vindas</h1>
                        <form>
                            <div className="inputarea">
                                <input type="email" name="emails" id="emails" required></input>
                                <p>Seu e-mail</p>
                            </div>
                            <div className="inputarea">
                                    <input type="password" name="pass" id="pass" required></input>
                                    <p>Sua senha</p>
                                </div>
                                <button>Cadastrar-se</button>

                                <div className="login-nav">
                                    <Link to="/login">Já possui uma conta?</Link>
                                </div>
                        </form>
                    </div>
                </div>
                
                <div className="sig-2">
                    <h2>A melhor plataforma de roupas</h2>
                    <br></br>
                    <br></br>

                    <h1>Ficamos felizes em  <br></br>ver você por aqui</h1>
                    <br></br>
                    <br></br>
                    <h1>Faça seu cadastro e obtenha das <br></br>melhores promoções de roupas</h1>
                </div>
            </div>
        )
}




export default Singup;
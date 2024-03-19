import React, {useState, useEffect} from "react";
import Axios from "axios";

import {Link} from "react-router-dom";

import "./login.css";
import axios from "axios";



function Login(){
    const [values, setValues] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
        });
    }, []);

    const handleValue = (value) =>{
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value
        }));

        console.log(value);
    }

    const handleSubmit = async (e) =>{
        await Axios.post("http://localhost:8080/users", {
            email: values.email,
            senha: values.senha
        });
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
               
                <div className="login-container">
                        <h2>Ecommerce</h2>
                        <h1>Bom ver você novamente</h1>
                    <form action="" method="POST" onSubmit={handleSubmit}>
                        <div className="inputarea">
                            <input type="email" name="email" id="emails" onChange={handleValue} required></input>
                            <p>Seu e-mail</p>
                        </div>
                        <div className="inputarea">
                            <input type="password" name="senha" id="pass" onChange={handleValue} required></input>
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
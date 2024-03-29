import React, {useState, useEffect} from "react";
import Axios from "axios";

import {Link, useNavigate} from "react-router-dom";

import "./singup.css";
import axios from "axios";



function Singup(){
    const [values, setValues] = useState();
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("http://localhost:8080/users", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        }).then((resp) => resp.json()).then((data) =>{

        });
    });

    const handleValue = (value) =>{
        setValues((prevValue) =>({
                ...prevValue,
                [value.target.name]: value.target.value
            
        }));
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        await Axios.post("http://localhost:8080/users", {
            email: values.email,
            senha: values.senha
        }).then((response) =>{
            if(response.data.error){
                navigate("/singup", {state: {message: response.data.error}});
            } else{
                navigate("/login", {state: {message: "Usuario cadastrado com sucesso"}});
            }
            
        }).catch(()=>{
            console.log("erro");
        });

        
        
    }



        return(
            <div className="singup-area">
                <div className="sig-1">
                    <div className="singup-container">
                    <h2>Ecommerce</h2>
                        <h1>Bem vindo a nossa plataforma</h1>
                        <form action="" method="POST" onSubmit={handleSubmit}>
                            <div className="inputarea">
                                <input type="text" name="email" id="emails" onChange={handleValue} required></input>
                                <p>Seu e-mail</p>
                            </div>
                            <div className="inputarea">
                                    <input type="password" name="senha" id="pass" onChange={handleValue} required></input>
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
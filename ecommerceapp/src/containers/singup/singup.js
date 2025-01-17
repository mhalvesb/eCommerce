import React, {useState, useEffect} from "react";
import Axios from "axios";

import {Link, useNavigate, useLocation} from "react-router-dom";

import Message from "../../components/message/message.js";
import "./singup.css";
import axios from "axios";



function Singup(){
    if(localStorage.getItem("user")){
        window.location.href = "/"
        navigate("/");
    }


    const [values, setValues] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState("");

    

    useEffect(()=>{
        fetch("https://ecommerce-server-wheat.vercel.app/users", {
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
        
        await Axios.post("https://ecommerce-server-wheat.vercel.app/users", {
            email: values.email,
            senha: values.senha,
            login: values.usuario,
            nome: values.nome
        }).then((response) =>{
            if(response.data.error){
                navigate("/singup", {state: {message: response.data.error}});
            } else{
                navigate("/login", {state: {messageSuccess: "Usuario cadastrado com sucesso"}});
            }
            
        }).catch((error)=>{
            
        });

        
        
    }



        return(
            <div className="singup-area">
                <div className="sig-1">
                    {message && <Message msg={message} type="failure"/>}
                    <div className="singup-container">
                    <h2>Ecommerce</h2>
                        <h1>Bem vindo a nossa plataforma</h1>
                        <form action="" method="POST" onSubmit={handleSubmit}>
                            <div className="inputarea">
                                <input type="text" name="nome" id="nomes" onChange={handleValue} required></input>
                                <p>Seu nome</p>
                            </div>
                            <div className="inputarea">
                                <input type="text" name="usuario" id="usuarios" onChange={handleValue} required></input>
                                <p>Seu usuario</p>
                            </div>
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
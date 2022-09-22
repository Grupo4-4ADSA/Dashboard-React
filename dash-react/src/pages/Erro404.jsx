import React, { useState } from "react";
import '../html-css-template/css/style-global.css';
import '../html-css-template/css/style-efeitos.css';
import logoOncln from '../html-css-template/imagens/img-logo/logo-cln.png'
import fundoPageErro from '../html-css-template/imagens/img-404/imgFundo404.png'
import { useNavigate } from 'react-router-dom'
import autentica from '../Api'

function Login(props) {

    const navigate = useNavigate();
    const [login, setLogin] = useState([])
    const [senha, setSenha] = useState([])

    function autenticacao(e) {
        e.preventDefault();
        autentica.ApiLogin.post("/autenticacao", {
            login: login,
            senha: senha
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("Login feito com sucesso")
                    sessionStorage.nomeGestor = response.data.nome;
                    sessionStorage.idPredio = response.data.fkEmpresa;
                    sessionStorage.idGestor = response.data.idGestor;
                    navigate("/home")
                } else {
                    console.log("login deu errado irmao" + response.status)
                    document.getElementById('senha').style.borderColor = 'red'
                }

            })

    }

    return (
        <>
            <nav>
                <div className="container">
                    <img src={logoOncln} alt="Logo" className="logo e" onClick={() => navigate("/")}/>
                </div>
            </nav>

            <div className="container login">
                    <div className="erro404">
                        <img src={fundoPageErro} alt="" className="img-fundo-erro" />
                    </div>
            </div>
        </>
    )
}

export default Login;
import React, { useState } from "react";
import '../html-css-template/css/style-global.css';
import '../html-css-template/css/style-efeitos.css';
import logoOncln from '../html-css-template/imagens/img-logo/logo-cln.png'
import fundoLogin from '../html-css-template/imagens/fundo-login.png'
import { useNavigate } from 'react-router-dom'
import autentica from '../Api'
import ImgSenha from '../html-css-template/imagens/ver.png'

function Login(props) {

    const navigate = useNavigate();
    const [login, setLogin] = useState([])
    const [senha, setSenha] = useState([])
    const [passwordType, setPasswordType] = useState("password");

    function setView() {
        if (passwordType === "text") {
            setPasswordType("password")
        } else {
            setPasswordType("text")
        }
    }

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
                    console.log("login deu errado" + response.status)
                    document.getElementById('senha').style.borderColor = 'red'
                }

            })

    }

    return (
        <>
            <nav>
                <div className="container">
                    <img src={logoOncln} alt="Logo" className="logo" />
                </div>
            </nav>

            <div className="container login">
                <div className="login-content">
                    <img src={fundoLogin} alt="" className="login-img" />
                    <div className="formulario">
                        <h2>LOGIN</h2><br />
                        <form onSubmit={autenticacao}>
                            <div className="formAcess">
                                <label className="input-fild">
                                    <input type="text" id="nomeEmpresa" name="login" defaultValue={login}
                                        placeholder="Usuário:" required minLength="4"
                                        autoFocus onChange={e => setLogin(e.target.value)} />
                                    <div className="underline"></div>
                                </label>
                            </div>
                            <div className="formAcess">
                                <label className="input-fild">
                                    <input type={passwordType} className="senha" id="senha" name="senha" defaultValue={senha}
                                        placeholder="Senha:" required minLength="4"
                                        onChange={e => setSenha(e.target.value)} />
                                    <img src={ImgSenha} alt="imagem olho" id="olho" onClick={() => setView()} className="olho"></img>
                                    <div className="underline"></div>
                                </label>

                            </div>

                            <h4>Esqueceu sua senha?</h4>

                            <button className="btn" type="submit">Entrar</button>
                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;
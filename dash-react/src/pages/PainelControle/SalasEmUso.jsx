import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../Api'
import '../../html-css-template/css/style-global.css';
import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgVoltar from '../../html-css-template/imagens/voltar.png';
import ListaEmUso from "../../componentes/listas/ListaBtnEmUso";
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-branco.png';

function SalaEmUso(props) {
    const navigate = useNavigate();

    const [rooms, setRooms] = useState([]);
    console.log(rooms)

    const idPredio = sessionStorage.idPredio

    useEffect(() => {
        api.Api.get(`/rooms/${idPredio}`)
            .then(response => {
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return (
        <>
            <div clas="container">

                <div class="superior">
                    <div class="nav-superior-esquerda">
                        <img src={LogoOnclnBranco} alt="Logo" />
                    </div>

                    <NavSupCentro />
                </div>

                <div class="container-dash">
                    <div class="nav-esquerda">
                        <NavEsquerdo />
                    </div>
                    <div class="conteudo">
                        <img className="voltar" onClick={() => navigate(-1)} src={ImgVoltar} alt="" />

                        <h2>Salas em uso</h2>
                        <div className="btns-direcionar">
                            <div className="list-salas">
                                {
                                    <ListaEmUso
                                        name={rooms.map(rooms => (
                                            <button  onClick={() => navigate("/painel-controle-salas")} className="direcionar" value={rooms.id} >
                                                <h3>{rooms.name}</h3>
                                                <h3>Andar:{rooms.floor}</h3>
                                                
                                            </button>
                                        ))} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default SalaEmUso;
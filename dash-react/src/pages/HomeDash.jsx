import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from '../Api'
import '../html-css-template/css/style-global.css';
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import BtnsDirecionar from '../componentes/btns-home/btns-home';
import ImgVoltar from '../html-css-template/imagens/voltar.svg';
import ListaHome from "../componentes/listas/ListaHome";
import LogoOnclnBranco from '../html-css-template/imagens/img-logo/logo-cln-branco.svg';

function Home(props) {
    const navigate = useNavigate();

    const [rooms, setRooms] = useState([]);
    console.log(rooms)

    const idPredio = sessionStorage.idPredio

    useEffect(() => {
        api.Api.get(`rooms/all/251`)
            .then(response => {
                if (response.status === 200) {
                    setRooms(response.data)
                }
                setRooms(response.data[0].clnBox.sala.name)
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
                      
                        <BtnsDirecionar />

                        <div className="box-salas">
                            
                            <div className="box-list">
                                <h2 className="titulo-lista-salas-home">Salas cadastradas: {rooms.length}</h2>
                                <div className="list">
                                    {
                                        rooms.map(rooms => (
                                            <ListaHome
                                                idRoom={rooms.idRoom}
                                                name={rooms.name}
                                                floor={rooms.floor}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Home;
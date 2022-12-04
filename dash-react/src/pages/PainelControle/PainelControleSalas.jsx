import React, { useState, useEffect } from "react";
import api from '../../Api';
import { useNavigate } from "react-router-dom";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-list.css';

import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgVoltar from '../../html-css-template/imagens/voltar.svg';
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-cln-branco.svg';
import ListaEquipamentoPainel from '../../componentes/listas/ListaEquipamentoPainel'


function PainelSalas(props) {
    const navigate = useNavigate();

    const [equips, setEquips] = useState([]);
    const idSala = sessionStorage.idSala
    const [nameRoom, setNameRoom] = useState([])

    useEffect(() => {
        api.Api.get(`/equipments/${idSala}`)
            .then(response => {
                if (response.status === 200) {
                    setEquips(response.data)
                }
                setNameRoom(response.data[0].clnBox.sala.name)
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

                        <h2>Sala: {nameRoom}</h2>
                        <h3 className="total">Total: {equips.length}</h3>
                        <div className="titulo">
                            <table className="table-lista">
                                <thead>
                                    <tr>
                                        <th >Equipamento</th>
                                        <th >Id</th>
                                        <th >Potência</th>
                                        <th >Estado</th>
                                        <th >Ação</th>
                                        <th ></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="list organiza-lista">
                            <table className="table-lista">

                                {
                                    equips.map(equips => (
                                        <ListaEquipamentoPainel
                                            type={equips.tipo}
                                            potency={equips.potencia}
                                            id={equips.idEquipamento}
                                            state={'desligado'}
                                        />
                                    ))
                                }

                            </table>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PainelSalas;
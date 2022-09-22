import React, { useState, useEffect } from "react";
import api from '../../Api';
import { useNavigate } from "react-router-dom";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-list.css';

import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgVoltar from '../../html-css-template/imagens/voltar.png';
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-branco.png';
import ListaEquipamentoPainel from '../../componentes/listas/ListaEquipamentoPainel'


function PainelSalas(props) {
    const navigate = useNavigate();

    const [equips, setEquips] = useState([]);
    const idSala = sessionStorage.idSala

    useEffect(() => {
        api.Api.get(`/equipments/${idSala}`)
            .then(response => {
                setEquips(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    })

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

                        <h2>{equips.name}</h2>

                        <div className="list organiza-lista">
                            <table className="table-lista">
                                <li className="title-lista">
                                    <thead>
                                        <tr>
                                            <th >Equipamento</th>
                                            <th >Potência</th>
                                            <th >Estado</th>
                                            <th >Ação</th>
                                            <th ></th>
                                        </tr>
                                    </thead>
                                </li>

                                {
                                    equips.map(equips => (
                                        <ListaEquipamentoPainel
                                            type={equips.type}
                                            potency={equips.potency}
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
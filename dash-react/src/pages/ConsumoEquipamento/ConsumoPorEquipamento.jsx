import React, { useState, useEffect } from "react";
import api from '../../Api';
import '../../html-css-template/css/style-global.css';
import { useNavigate } from 'react-router-dom';
import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgDesVoltar from '../../html-css-template/imagens/voltar.png';
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-branco.png';
import ChartConsumo from '../../componentes/consumo/ChartEquipamentoConsumo';
import Detalhes from './Detalhes'

function ConsumoPorEquioamento() {
    const navigate = useNavigate();
    const [equips, setEquips] = useState([]);

    const idEquipment = sessionStorage.idEquipment
    
    useEffect(() => {
        api.Api.get(`/equips/${idEquipment}`)
            .then(response => {
                setEquips(response.data)
                // console.log(response)
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
                        <img className="voltar" onClick={() => navigate(-1)} src={ImgDesVoltar} alt="" />

                        <h2>Ar</h2>
                        <div className="centro">
                            <div className="chart-consumo">
                                <h3>Dados de consumo do equipamento do último mês</h3>
                                <ChartConsumo />
                            </div>
                        </div>

                        <div className="centro">
                            <div className="info-consumo">

                                {
                                    equips.map(equips => (
                                        <Detalhes
                                            lifespan={equips.lifespan}
                                            date={equips.installationDate}
                                            potency={equips.potency}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ConsumoPorEquioamento;
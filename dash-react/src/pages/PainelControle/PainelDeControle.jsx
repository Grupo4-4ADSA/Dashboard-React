import React from "react";
import { useNavigate } from "react-router-dom";
import '../../html-css-template/css/style-global.css';
import ImgAgendamentoMarcado from '../../html-css-template/imagens/img-painel-controle/agendamento-marcado.png';
import ImgEmUso from '../../html-css-template/imagens/img-painel-controle/em-uso.png';
import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgVoltar from '../../html-css-template/imagens/voltar.png';
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-branco.png';

function PainelDeControle(props) {
    const navigate = useNavigate();

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
                        <h2>Painel de controle</h2>
                        <div className="centro">
                            <div className="btns-direcionar">

                                <div className="direcionar" onClick={() => navigate("/painel-de-controle-agendamento-marcado")}>
                                    <img src={ImgAgendamentoMarcado} alt="" />
                                    <h4>Agendamento Marcado</h4>
                                </div>
                                <div className="direcionar" onClick={() => navigate("/painel-de-controle-salas-em-uso")} >
                                    <img src={ImgEmUso} alt="" />
                                    <h4>Em uso</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default PainelDeControle;
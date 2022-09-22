import React from "react";
import '../../html-css-template/css/style-global.css';
import { useNavigate } from 'react-router-dom';
import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgDesVoltar from '../../html-css-template/imagens/voltar.png';
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-branco.png';
import ImgCadastrarOnCln from '../../html-css-template/imagens/img-cadastrar/oncln.png';
import ImgCadastrarSalas from '../../html-css-template/imagens/img-cadastrar/cadastro-sala.png';
import ImgCadastrarEquip from '../../html-css-template/imagens/img-cadastrar/cad-equip.png';

function EditarCadastrar() {
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
                        <img className="voltar" onClick={() => navigate(-1)} src={ImgDesVoltar} alt="" />

                        <h2>Cadastrar, editar ou excluir</h2>
                        <div className="centro">
                            <div className="btns-direcionar">

                                <div className="direcionar" onClick={() => navigate("/salas")}>
                                    <img src={ImgCadastrarSalas} alt="" />
                                    <h4>Cadastrar Sala</h4>
                                </div>
                                <div className="direcionar" onClick={() => navigate("/on-cln-box")}>
                                    <img src={ImgCadastrarOnCln} alt=""  />
                                    <h4>Cadastrar Oncln</h4>
                                </div>
                                <div className="direcionar" onClick={() => navigate("/equipamentos")}>
                                    <img src={ImgCadastrarEquip} alt="" />
                                    <h4>Cadastrar equipamento</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default EditarCadastrar;
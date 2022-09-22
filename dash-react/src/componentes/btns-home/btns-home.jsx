import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import ImgPainelControle from '../../html-css-template/imagens/img-home/painel-controle.svg';
import ImgCentralAjuda from '../../html-css-template/imagens/img-home/central-ajuda.svg';
import ImgRelatorio from '../../html-css-template/imagens/img-home/relatorio.svg';
import ImgCadastrarEditar from '../../html-css-template/imagens/img-home/edicad.svg';

function Home(props) {
    const navigate = useNavigate();

    return (
        <>
            <div className="btns-direcionar">
                <button onClick={()=> navigate("/painel-controle")} className="direcionar">
                    <img src={ImgPainelControle} alt="" />
                    <h4>Painel de controle</h4>
                </button>
                <button onClick={()=> navigate("/resumo-consumo")} className="direcionar">
                    <img src={ImgRelatorio} alt="" />
                    <h4>Resumo de consumo</h4>
                </button>
                <button onClick={()=> navigate("/cadastra-edita")} className="direcionar">
                    <img src={ImgCadastrarEditar} alt="" />
                    <h4>Cadastros</h4>
                </button>
                <button onClick={()=> navigate("/central-ajuda")} className="direcionar">
                    <img src={ImgCentralAjuda} alt="" />
                    <h4>Central de ajuda</h4>
                </button>
            </div>
        </>

    )
}

export default Home;
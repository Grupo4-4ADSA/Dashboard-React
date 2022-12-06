import React, { useState, useEffect } from "react";
import '../../html-css-template/css/style-global.css';
import ImgAlerta from '../../html-css-template/imagens/img-list/atencao.png';
import { useNavigate } from 'react-router-dom';

function ListaHome(props) {
    const navigate = useNavigate();
    function acessoAPage(idPage) {
        sessionStorage.idSala = idPage;
        navigate("/painel-controle-salas")
    }

    return (
        <>
            <li className="li-box-salas" onClick={() => acessoAPage(props.idRoom)}>
                <h5 className="h5-li-box-salas"> Sala {props.name} <br />
                    Andar {props.floor}
                </h5>
            </li>
        </>
    )
}

export default ListaHome;
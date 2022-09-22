import React, { useState, useEffect } from "react";
import '../../html-css-template/css/style-global.css';
import ImgAlerta from '../../html-css-template/imagens/img-list/atencao.png';

function ListaHome(props) {
    return (
        <>
            <li className="li-box-salas">
                <h5> Sala {props.name} <br />
                    Andar {props.floor}
                </h5>
            </li>
        </>
    )
}

export default ListaHome;
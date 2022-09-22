
import React from "react";
import '../../html-css-template/css/style-global.css';
import { Link } from "react-router-dom";

function ItemNavEsq(props) {
    return (
        <>
            <ul class=" list-nav-esqueda">
                <li><Link to="/home">Home</Link> </li>
                <li><Link to="/cadastra-edita">Cadastrar/Editar</Link></li>
                <li><Link to="/salas">Salas</Link></li>
                <li><Link to="/painel-controle">Painel de controle</Link></li>
                <li><Link to="/consumo-equipamento">Consumo/equipamento</Link></li>
                <li><Link to="/resumo-consumo">Resumo de consumo</Link></li>
                <li><Link to="/central-ajuda">Central de ajuda</Link></li>
            </ul>
        </>
    )
}

export default ItemNavEsq;
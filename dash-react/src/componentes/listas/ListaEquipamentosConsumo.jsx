import React, { useState, useEffect } from "react";
import '../../html-css-template/css/style-global.css';
import api from '../../Api';

function ListaEquipamentos(props) {

    return (
        <>
            <li>
                <thead >
                    <tr>
                        <td class="td-lista">{props.type}</td>
                        <td class="td-lista">{props.nameRoom}</td>
                        <td class="td-lista">{props.floor}°</td>
                        <td class="td-lista">Ligado</td>
                        <td class="td-lista" ><a onClick={() => props.setIdEquipment(`${props.idEquipment}`)} 
                        value={props.idEquipment} href="/consumo-por-equipamento">Acessar</a> </td>
                    </tr>
                </thead>
            </li>

        </>
    )
}

export default ListaEquipamentos
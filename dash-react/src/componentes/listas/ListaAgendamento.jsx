import React from "react";
import '../../html-css-template/css/style-global.css';

function ListaSalas(props) {
    return (
        <>
            <li>
                <thead>
                    <tr>
                        <td class="td-lista">{props.name}</td>
                        <td class="td-lista menor" >{props.floor}</td>
                        <td class="td-lista menor">29/10/2022</td>
                        <td class="td-lista menor">29/10/2022</td>
                        <td class="td-lista menor">09:30 </td>
                        <td class="td-lista menor">On</td>
                        <td class="td-lista-editar-deletar">
                            <button className="editar" onClick={() => props.update(`${props.name}`,`${props.idRoom}`,`${props.floor}`)} >
                                Editar/</button>
                            <button className="deletar" onClick={() => props.delete(`${props.idRoom}`)}>Deletar</button>
                        </td>
                    </tr>
                </thead>
            </li>

        </>
    )

}

export default ListaSalas;
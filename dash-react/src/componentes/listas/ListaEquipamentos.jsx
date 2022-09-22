import React from "react";

function ListaEquipamentos(props) {
    return (
        <>
            <li>
                <thead>
                    <tr>
                        <td class="td-lista">{props.type}</td>
                        <td class="td-lista">{props.nameRoom}</td>
                        <td class="td-lista">{props.floor}</td>
                        <td class="td-lista-editar-deletar">
                            <button className="editar" onClick={() => props.update(`${props.name}`, `${props.idRoom}`, `${props.floor}`)} >
                                Editar/</button>
                            <button className="deletar" onClick={() => props.delete(`${props.idRoom}`)}>Deletar</button>
                        </td>
                        <td class="td-lista"><a href="/painel-controle-salas">Acessar</a> </td>
                    </tr>
                </thead>
            </li>
        </>
    )
}

export default ListaEquipamentos
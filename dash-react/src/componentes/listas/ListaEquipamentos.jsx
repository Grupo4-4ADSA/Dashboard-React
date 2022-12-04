import React from "react";

function ListaEquipamentos(props) {
    return (
        <>
            <li>
                <thead>
                    <tr>
                        <td class="td-lista">{props.type}</td>
                        <td class="td-lista">{props.idEquipamento}</td>
                        <td class="td-lista">{props.nameRoom}</td>
                        <td class="td-lista">{props.floor}</td>
                        <td class="td-lista-editar-deletar">
                            <button className="editar" onClick={() => 
                            props.update(
                                `${props.idEquipamento}`,
                                `${props.typeEquipament}`,
                                `${props.installationDate}`,
                                `${props.lifespanEquipament}`,
                                `${props.potencyEquipment}`,
                                `${props.qtdEquipment}`,
                                `${props.nameRoom}`)} >
                                Editar/</button>
                            <button className="deletar" onClick={() => props.delete(
                                `${props.idEquipamento}`)}>Deletar</button>
                        </td>
                        <td class="td-lista"><a href="/painel-controle-salas">Acessar</a> </td>
                    </tr>
                </thead>
            </li>
        </>
    )
}

export default ListaEquipamentos
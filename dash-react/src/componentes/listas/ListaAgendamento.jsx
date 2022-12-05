import React from "react";
import '../../html-css-template/css/style-global.css';

function ListaSalas(props) {

    function dataAtualFormatada() {
        const dataInt = new Date(props.date),
            dia = (dataInt.getDate() + 1).toString().padStart(2),
            mes = (dataInt.getMonth() + 1).toString().padStart(2),
            ano = dataInt.getFullYear();
        return dia + "/" + mes + "/" + ano;
    }

    var textAcao = ""
    if (props.acao) {
        textAcao = "Ligar"
    } else {
        textAcao = "Desligar"
    }

    return (
        <>
            <li>
                <thead>
                    <tr>
                        <td class="td-lista">{props.nameRoom}</td>
                        <td class="td-lista menor" >{props.idScheduling}</td>
                        <td class="td-lista menor">{props.floor}</td>
                        <td class="td-lista menor">{dataAtualFormatada()}</td>
                        <td class="td-lista menor">{props.hour}</td>
                        <td class="td-lista menor">{textAcao}</td>
                        <td class="td-lista-editar-deletar">
                            <button className="editar" onClick={() =>
                                props.update(
                                    `${props.name}`,
                                    `${props.idRoom}`,
                                    `${props.floor}`)} >
                                Editar/</button>
                            <button className="deletar" onClick={() => props.delete(`${props.idScheduling}`)}>Deletar</button>
                        </td>
                    </tr>
                </thead>
            </li>

        </>
    )

}

export default ListaSalas;
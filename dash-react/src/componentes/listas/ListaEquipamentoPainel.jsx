import React from "react";
import apiCln from '../../Api'

function ListaEquipamentoPainel(props) {

    function atualizar(IdEquipamento) {
        if (typeof IdEquipamento !== "undefined") {

            apiCln.ApiCln.get(`atividade-luz-sala/${IdEquipamento}`, {
            })
                .then(() => {
                    console.log("Atualizado com sucesso")
                })
        }
    }

    return (
        <>
            <li>
                <thead >
                    <tr>
                        <td class="td-lista maior">{props.type}</td>
                        <td class="td-lista">{props.id}</td>
                        <td class="td-lista">{props.data}</td>
                        <td class="td-lista maior">{props.potency}</td>
                        <td class="td-lista"> <div class="label">
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round" onClick={() => (atualizar(1))}></span>
                            </label>
                        </div></td>
                    </tr>
                </thead>
            </li>
        </>
    )
}

export default ListaEquipamentoPainel
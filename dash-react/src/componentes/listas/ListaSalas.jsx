import React from "react";
import atencao from '../../html-css-template/imagens/img-list/atencao.png';
import { useNavigate } from 'react-router-dom';

function ListaSalas(props) {
    const navigate = useNavigate();

    function acessoAPage(idPage) {
        sessionStorage.idSala = idPage;
        navigate("/painel-controle-salas")
    }

    return (
        <>
            <li>
                <thead>
                    <tr>
                        <td class="td-lista">{props.name}</td>
                        <td class="td-lista td-menor">{props.floor}</td>
                        <td class="td-lista"><img src={atencao} alt="" /></td>
                        <td class="td-lista-editar-deletar">
                            <button className="editar" onClick={() => props.update(`${props.name}`, `${props.idRoom}`, `${props.floor}`)} >
                                Editar/</button>
                            <button className="deletar" onClick={() => props.delete(`${props.idRoom}`)}>Deletar</button>
                        </td>
                        <td class="td-lista">
                            <a onClick={() => acessoAPage(props.idRoom)}>Acessar</a> </td>
                    </tr>
                </thead>
            </li>

        </>
    )

}

export default ListaSalas;
import React from "react";
import '../../html-css-template/css/style-global.css';

function SelectEquipamento(props) {

    return (

        <>
            <select id="select-equipamento" onChange={props.onChange}>
                <img src="" alt="" />
                <option value="valor1" selected >Selecione uma sala</option>

                <option value="Ar-Condicionado">Ar-Condicionado</option>,
                <option value="Conjunto de lâmpadas">Conjunto de lâmpadas</option>,
                <option value="Conjunto de tomadas">Conjunto de tomadas</option>

            </select>
        </>

    )

}

export default SelectEquipamento;
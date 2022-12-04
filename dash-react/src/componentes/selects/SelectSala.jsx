import React, { useState, useEffect } from "react";
import api from '../../Api';
import '../../html-css-template/css/style-global.css';

function SelectSalas(props) {

    var listData = []

    console.log("Essa lista " + props.data.length)
    if (props.data.length > 0) {
        listData = props.data
    }

    return (
        <>
            <select className="select-sala" id="select-sala" onChange={props.onChange}>
                <img src="" alt="" />
                <option value="valor1" selected >Selecione uma sala</option>
                {listData.map(value => (
                    <option key={value.idRoom} value={value.idRoom} >Sala: {value.name}, andar: {value.floor}</option>))}
            </select>
        </>
    )
}

export default SelectSalas;
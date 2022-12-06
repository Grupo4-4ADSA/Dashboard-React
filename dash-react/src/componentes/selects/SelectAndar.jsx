import React, { useState, useEffect } from "react";
import api from '../../Api';
import '../../html-css-template/css/style-global.css';

function SelectAndar(props) {

    var andar = props.andar + 1
    var subsolo = props.subsolo

    var list = [];

    if (subsolo > 0) {
        for (let i = 0; i < subsolo; i++) {
            list.push(i + 1 + "º Subsolo")
        }
    }
    for (let i = 0; i < andar; i++) {
        if (i == 0) {
            list.push("Terreo")
        } else {
            list.push(i + "º Andar")
        }
    }

    return (
        <>
            <select name="select-sala" onChange={props.onChange}>
                <img src="" alt="" />
                <option value="valor1" selected >Selecione um andar</option>
                {list.map(value => (
                    <option key={value} value={value}>{value}</option>))}
            </select>
        </>
    )

}

export default SelectAndar;
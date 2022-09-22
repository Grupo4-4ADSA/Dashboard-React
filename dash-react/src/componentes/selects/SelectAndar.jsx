import React, { useState, useEffect } from "react";
import api from '../../Api';
import '../../html-css-template/css/style-global.css';

function SelectSalas(props) {

    const [setRooms] = useState([]);

    const idPredio = sessionStorage.idPredio

    useEffect(() => {
        api.Api.get(`/rooms/${idPredio}`)
            .then(response => {
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    })

    return (
        <>
            <select name="select-sala">
                <img src="" alt="" />
                <option value="valor1" selected >Selecione um andar</option>
                {props.floor}
            </select>
        </>
    )

}

export default SelectSalas;
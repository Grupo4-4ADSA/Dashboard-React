import React, { useState, useEffect } from "react";
import '../../html-css-template/css/style-global.css';
import api from '../../Api';

function SelectsPageSalas(props) {

    // const [rooms, setRooms] = useState([]);

    // const idPredio = sessionStorage.idPredio
    // useEffect(() => {
    //     api.Api.get(`/rooms/${idPredio}`)
    //         .then(response => {
    //             setRooms(response.data)
    //         })
    //         .catch(erro => {
    //             console.log(erro)
    //         })
    // })

    return (
        <>
            <select name="select-andar" className="select-menor">
                <option value="valor1" selected >Selecione o andar</option>
                
            </select>
            <select name="select-sala" onChange={props.onChange} className="select-menor">
                <option value="valor1" selected >Selecione a sala</option>
                {/* {
                rooms.map(r => (
                <option value={r.idRoom}>{r.name}</option>
                ))
                } */}
            </select>
        </>
    )
}
 
export default SelectsPageSalas;
import React from "react";
import '../../html-css-template/css/style-global.css';

function ListaSalas(props) {
    return (
        <>
            <li className="li-box-salas">
                <h5>
                    Id Cln: {props.idCLNBox}<br />
                    Sala {props.name} <br />
                    Andar {props.floor}
                </h5>
            </li>
        </>
    )
}

export default ListaSalas;
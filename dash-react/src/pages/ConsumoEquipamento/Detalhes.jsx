import React from "react";
import '../../html-css-template/css/style-global.css';

function Detalhes(props) {

    return (
        <>
            <h4>Informações do equipamento</h4>
            <h6>Vida útil: {props.lifespan} dias</h6>
            <h6>Temperatura do equipamento: 20º</h6>
            <h6>Data de instalação: {props.date}</h6>
            <h6>Voltagem: {props.potency}</h6>
            <h5>Desligar | Ligar</h5>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"/*  onClick={() => (atualizar(1))} */></span>
            </label>
        </>
    )

}

export default Detalhes;
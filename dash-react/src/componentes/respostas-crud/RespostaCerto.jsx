import React from "react";
import '../../html-css-template/css/style-global.css';

function RespostaDeuBom(props) {
    return (
        <>
            <div id="respostaCerta" class="div-deu-certo">
                <h3>{props.texto}</h3>
                <button onClick={props.closeRespostaCerto} className="btn-close" >X</button>
            </div>
        </>
    )
}

export default RespostaDeuBom;
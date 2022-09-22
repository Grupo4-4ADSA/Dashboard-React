import React from "react";
import '../../html-css-template/css/style-global.css';

function RespostaDeuRuim(props) {
    return (
        <>
            <div class=" div-deu-erro">
                <h3>{props.texto}</h3>
                <button onClick={props.closeRespostaErro} className="btn-close" >X</button>
            </div>
        </>
    )
}

export default RespostaDeuRuim;
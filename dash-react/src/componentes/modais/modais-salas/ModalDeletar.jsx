import React, { useState } from "react";
import '../../../html-css-template/css/style-global.css';
import RespostaCerto from '../../respostas-crud/RespostaCerto';
import RespostaErro from '../../respostas-crud/RespostaErro';

import api from "../../../Api";

function ModalDeletar(props) {

    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    var setRespostaCerta
    setRespostaCerta = document.getElementById('respostaErrada')

    function deletar(idSalaSelecionada) {
        if (typeof idSalaSelecionada !== "undefined") {
            api.Api.delete(`/rooms/${idSalaSelecionada}/`)
                .then(() => {
                    console.log("excluido com sucesso")
                    document.location.reload(true);
                })
        }
    }

    return (
        <>
            {respostaCerto ? <RespostaCerto closeRespostaCerto={
                () => setRespostaCerto(false)}
            /> : <></>}

            {respostaErrado ? <RespostaErro closeRespostaErro={
                () => setRespostaErrado(false) && setRespostaCerta.value("Erro ao deletar")
            } /> : <></>}

            <div className="modal-centro">
                <div className="modal">
                    <button onClick={props.closeModalEditar} className="btn-close lado"  >X</button>
                    <div className="centralizar">
                        <h3>Tem certeza que deseja Deletar?</h3>
                    </div>
                    <button className="button-cinza button-modal" onClick={props.closeModalEditar} >Cancelar</button>
                    <button className="button-azul lado button-modal" type="submit"
                        onClick={() => deletar(props.idRoom)}>Deletar</button>
                </div>
            </div>
        </>
    )
}

export default ModalDeletar;
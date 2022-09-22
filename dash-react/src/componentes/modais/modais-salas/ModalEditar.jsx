import React, { useState  } from "react";
import '../../../html-css-template/css/style-global.css';
import RespostaCerto from '../../respostas-crud/RespostaCerto';
import RespostaErrado from '../../respostas-crud/RespostaErro'
import ImgInfo from '../../../html-css-template/imagens/simbolo-de-informacao.png'

import api from "../../../Api";

function Modal(props) {
    const [nomeSala, setNomeSala] = useState(props.name)
    const [andarSala, setAndarSala] = useState(props.floor)

    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    function atualizar(event) {
        event.preventDefault()
        if (typeof props.idRoom !== "undefined") {
            api.Api.put(`/rooms/${props.idRoom}/`, {
                name: nomeSala,
                floor: andarSala

            }).then(response => {
                console.log(response.status)
                setRespostaCerto(true)
                setRespostaErrado(false)
                setTimeout(setRespostaCerto, 10000)
                window.location.reload()
            }).catch(erro => {
                console.log(erro)
                setRespostaErrado(true)
                setRespostaCerto(false)
                setTimeout(setRespostaErrado, 7000)
            })
        }
    }

    return (
        <>
            {respostaCerto ? <RespostaCerto /> : <></>}
            {respostaErrado ? <RespostaErrado /> : <></>}

            <div className="modal-centro">
                <div id="cadastro" className="modal">
                    <button onClick={props.closeModalEditar} className="btn-close lado" >X</button>
                    <h2>Editar salas</h2>
                    <form onSubmit={atualizar}>
                        <h4>Sala:</h4>
                        <input placeholder="Digite o nome da sala" autoFocus type="text"
                            defaultValue={(`${props.name}`)}
                            onChange={e => setNomeSala(e.target.value)}
                        />

                        <h4>Andar: <span data-tooltip="Para alterar este campo entre em contato com o suporte"><img src={ImgInfo} alt="" /></span> </h4>

                        <input className="input-editar" type="text" placeholder="Digite o andar dessa sala"
                            defaultValue={(`${props.floor}`)}
                            onChange={e => setAndarSala(e.target.value)} disabled
                        />

                        <button className="button-cinza button-modal"
                            onClick={props.closeModalEditar}>Cancelar</button>
                        <button className="button-azul lado button-modal" type="submit">Atualizar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal;
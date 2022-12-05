import React, { useState } from "react";
import '../../../html-css-template/css/style-global.css';
import RespostaCerto from '../../respostas-crud/RespostaCerto';
import RespostaErrado from '../../respostas-crud/RespostaErro'
import ImgInfo from '../../../html-css-template/imagens/simbolo-de-informacao.png'
import SelectSala from '../../selects/SelectSala';
import SelectAndar from '../../selects/SelectAndar';
import api from "../../../Api";

function Modal(props) {
    const [nomeSala, setNomeSala] = useState(props.name)
    const [andarSala, setAndarSala] = useState(props.floor)
    const [idSala, setIdRoom] = useState([])
    const [idAgendamento, setIdAgendamento] = useState([])
    const [rooms, setRooms] = useState([]);
    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    const [dataStart, setDataStart] = useState([])
    const [hour, setHour] = useState([])
    const [on, setOn] = useState([])

    function atualizar(event) {
        event.preventDefault()
        if (typeof props.idRoom !== "undefined") {
            api.Api.put(`/agendamentos/${idAgendamento}`, {
                idScheduling: idAgendamento,
                dataStart: dataStart,
                hour : hour,
                sala : idSala
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
                    <h2>Editar agendamento</h2>

                    <form onSubmit={atualizar} className="cadastro-equipamento">

                        <span >Sala desse agendamento:</span>
                        {
                            <SelectSala
                                onChange={(e) => {
                                    setIdRoom(e.target.value)
                                    console.log(idSala)
                                }}

                                data={rooms} />
                        }
                        <div className="input-lado">
                            <span>Data inicial:</span>
                            <input type="date"
                                value={andarSala}
                                onChange={e => setAndarSala(e.target.value)}
                            />
                        </div>

                        <div className="input-lado a">
                            <span>Data final:</span>
                            <input type="date"
                                value={andarSala}
                                onChange={e => setAndarSala(e.target.value)}
                            />
                        </div>
                        <span>Horário:</span>
                        <input type="number"
                            /*  value={vidaUtil} */
                            onChange={e => setAndarSala(e.target.value)}
                            maxLength="3" />

                        <span> Função do agendamento: </span>

                        <div className="on-off">
                            <input type="radio" name="nome_do_grupo" value="true" />
                            <span>Ligar</span>
                            <input type="radio" name="nome_do_grupo" value="false" />
                            <span> Desligar</span>
                        </div>
                        <div className="button-top">
                            <button onClick={props.closeModalCadastrar} className="button-cinza button-modal">Cancelar</button>
                            <button className="button-azul lado button-modal" type="submit">Cadastrar</button>
                        </div>
                    </form>

                
                </div>
            </div>
        </>
    )
}

export default Modal;
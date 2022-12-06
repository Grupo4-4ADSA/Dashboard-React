import React, { useState, useEffect } from "react";
import '../../../html-css-template/css/style-global.css';
import RespostaCerto from '../../respostas-crud/RespostaCerto';
import ImgInfo from '../../../html-css-template/imagens/simbolo-de-informacao.png'
import SelectSala from '../../selects/SelectSala';
import SelectAndar from '../../selects/SelectAndar';
import api from "../../../Api";
import RespostaErro from '../../respostas-crud/RespostaErro';

function Modal(props) {
    const [nomeSala, setNomeSala] = useState(props.name)
    const [andarSala, setAndarSala] = useState(props.floor)
    const [idSala, setIdRoom] = useState(props.sala)
    const [idAgendamento, setIdAgendamento] = useState(props.idScheduling)
    const [rooms, setRooms] = useState([]);
    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    const [dataStart, setDataStart] = useState(props.dataStart)
    const [hour, setHour] = useState(props.hour)
    const [on, setOn] = useState(props.on)

    function atualizar(event) {
        event.preventDefault()
        if (typeof idAgendamento !== "undefined") {
            api.Api.put(`/agendamentos/${idAgendamento}`, {
                idAgendamento: idAgendamento,
                data: dataStart,
                horario : hour,
                ligar: on
            }).then(response => {
                setRespostaCerto(true)
                setRespostaErrado(false)
                setTimeout(function () { window.location.reload() }, 2500)
            }).catch(erro => {
                setRespostaErrado(true)
                setRespostaCerto(false)
            })
        }
    }

    const idPredio = sessionStorage.idPredio

    useEffect(() => {
        api.Api.get(`/rooms/${idPredio}`)
            .then(response => {
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])
    
    return (
        <>
       {respostaCerto ? <RespostaCerto
                texto={"Atualizado com sucesso!"}
                closeRespostaCerto={
                    () => setRespostaCerto(false)} /> : <></>}

            {respostaErrado ? <RespostaErro
                texto={"Erro ao deletar"}
                closeRespostaErro={
                    () => setRespostaErrado(false)} /> : <></>}

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
                            <span>Data inicial:</span>
                            <input type="date"
                                value={dataStart}
                                onChange={e => setDataStart(e.target.value)}
                            />

                        <span>Horário:</span>
                        <input type="time"
                            /*  value={vidaUtil} */
                            onChange={e => setHour(e.target.value)}
                            maxLength="3" />

                        <span> Função do agendamento: </span>

                        <div className="on-off">
                            <input type="radio" name="nome_do_grupo" value="true" 
                             onChange={e => setOn(e.target.value)}/>
                            <span>Ligar</span>
                            <input type="radio" name="nome_do_grupo" value="false" 
                             onChange={e => setOn(e.target.value)}/>
                            <span> Desligar</span>
                        </div>
                        <div className="button-top">
                            <button onClick={props.closeModalEditar} className="button-cinza button-modal">Cancelar</button>
                            <button className="button-azul lado button-modal" type="submit">Salvar</button>
                        </div>
                    </form>

                
                </div>
            </div>
        </>
    )
}

export default Modal;
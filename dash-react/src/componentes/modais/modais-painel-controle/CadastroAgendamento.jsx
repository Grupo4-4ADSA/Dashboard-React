import React, { useState, useEffect } from "react";
import '../../../html-css-template/css/style-global.css';
import RespostaCerto from '../../respostas-crud/RespostaCerto';
import RespostaErro from '../../respostas-crud/RespostaErro';
import SelectSala from '../../selects/SelectSala';
import SelectAndar from '../../selects/SelectAndar';

import SelectEquipamento from '../../selects/SelectEquipamento';

import api from "../../../Api";

function ModalCadastroAgendamento(props) {
    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)
    const [idSala, setIdRoom] = useState([])

    const [nomeSala, setNomeSala] = useState([])
    const [dataInicio, setDataInicio] = useState([])
    const [andarSala, setAndarSala] = useState([])
    const [horario, setHorario] = useState([])
    const [ligar, setLigar] = useState([])

    const [rooms, setRooms] = useState([]);

    function cadastrarEquipamento(event) {
        event.preventDefault()
        console.log(nomeSala + " " + andarSala)
        api.Api.post("/agendamentos", {
            data: dataInicio,
            horario: horario,
            ligar: ligar,
            sala: {
                idRoom: idSala
            }

        }).then(response => {
            console.log(response.status)
            setRespostaCerto(true)
            setRespostaErrado(false)
            setTimeout(setRespostaCerto, 140000)
            setTimeout(function () { window.location.reload() }, 2500)
        }).catch(erro => {
            console.log(erro)
            setRespostaErrado(true)
            setRespostaCerto(false)
            setTimeout(setRespostaErrado, 7000)
        })
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
                texto={"Cadastrado com sucesso!"}
                closeRespostaCerto={
                    () => setRespostaCerto(false)} /> : <></>}

            {respostaErrado ? <RespostaErro
                texto={"Erro ao cadastrar"}
                closeRespostaErro={
                    () => setRespostaErrado(false)} /> : <></>}

            <div className="modal-centro">
                <div id="cadastro" className="modal">
                    <button onClick={props.closeModalCadastrar} className="btn-close lado" >X</button>

                    <h2>Agendar função</h2>
                    <form onSubmit={cadastrarEquipamento} className="cadastro-equipamento">

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
                            value={dataInicio}
                            onChange={e => setDataInicio(e.target.value)}
                        />

                        <span>Horário:</span>
                        <input type="time"
                            /*  value={vidaUtil} */
                            onChange={e => setHorario(e.target.value)}
                            maxLength="3" />

                        <span> Função do agendamento: </span>

                        <div className="on-off">
                            <input type="radio" name="nome_do_grupo" value="true"
                                onChange={e => setLigar(e.target.value)} />

                            <span>Ligar</span>
                            <input type="radio" name="nome_do_grupo" value="false"
                                onChange={e => setLigar(e.target.value)} />

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

export default ModalCadastroAgendamento;
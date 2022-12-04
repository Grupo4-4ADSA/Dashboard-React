import React, { useState, useEffect } from "react";
import '../../../html-css-template/css/style-global.css';
import RespostaCerto from '../../respostas-crud/RespostaCerto';
import RespostaErro from '../../respostas-crud/RespostaErro';
import SelectSala from '../../selects/SelectSala';
import SelectEquipamento from '../../selects/SelectEquipamento';

import api from "../../../Api";

function ModalCadastroEquipamento(props) {

    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    const [requestSizes, setRequest] = useState([])

    const [name, setNameEquipament] = useState([])
    const [typeEquipament, setType] = useState([])
    const [installationDate, setinstallation] = useState([])
    const [qtdEquipment, setQtdEquipment] = useState([])
    const [potencyEquipment, setPotencyEquipment] = useState([])
    const [lifespanEquipament, setLifespan] = useState([])
    const [porta, setPorta] = useState([])

    const [idSala, setIdRoom] = useState([])

    const [idCln, setidCLNBox] = useState([])
    const [rooms, setRooms] = useState([])

    function cadastrarEquipamento(event) {
        const dataInt = new Date(installationDate)
        console.log(dataInt.getTime())
        event.preventDefault()
        api.Api.post(`equipments`, {
            nome: typeEquipament,
            tipo: typeEquipament,
            instalacao: dataInt,
            vidaUtil: lifespanEquipament,
            potencia: potencyEquipment,
            qtdEquipamento: qtdEquipment,
            porta: porta,
            clnBox: {
                idCLNBox: idCln
            }

        }).then(response => {
            console.log(response.status)
            setRespostaCerto(true)
            setRespostaErrado(false)
            setTimeout(function () { window.location.reload() }, 2500);
        }).catch(erro => {
            console.log(erro)
            setRespostaErrado(true)
            setRespostaCerto(false)
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


    function requestSize(idSala) {
        api.Api.get(`/equipments/${idSala}`)
            .then(response => {
                setRequest(response.data)
                console.log(requestSizes.length)
            }).catch(erro => {
                console.log(erro)
            })
        if (requestSizes.length < 11) {
            setPorta(requestSizes.length)
        }
    }

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

                    <h2>Cadastrar equipamento</h2>

                    <form onSubmit={cadastrarEquipamento} className="cadastro-equipamento">

                        <span>Sala desse equipamento:</span>
                        {
                            <SelectSala
                                onChange={(e) => {
                                    setIdRoom(e.target.value)
                                    requestSize(e.target.value)
                                    rooms.map(valor => {
                                        if (valor.idRoom == e.target.value) {
                                            setidCLNBox(valor.idClnBox)
                                        }
                                    })
                                }}
                                data={rooms} />
                        }

                        <span>Tipo do equipamento:</span>
                        {
                            <SelectEquipamento
                                onChange={(e) => {
                                    setType(e.target.value)
                                }}
                            />
                        }

                        <span>Data da instalação:</span>
                        <input type="date"
                            value={installationDate}
                            onChange={e => setinstallation(e.target.value)}
                        />

                        <div className="input-lado">
                            <span>Quantidade:</span>
                            <input type="number"
                                placeholder="Digite a quantidade"
                                value={qtdEquipment} onChange={e =>
                                    setQtdEquipment(e.target.value)}
                                maxLength="3"
                            />
                        </div>

                        <div className="input-lado a">
                            <span>Potência:</span>
                            <input type="number"
                                placeholder="Digite a potência"
                                value={potencyEquipment}
                                onChange={e => setPotencyEquipment(e.target.value)}
                                maxLength="5"
                            />
                        </div>

                        <span>Vida útil em horas:</span>
                        <input type="number"
                            placeholder="Digite a vida útil em horas"
                            value={lifespanEquipament}
                            onChange={e => setLifespan(e.target.value)}
                            maxLength="3" />

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

export default ModalCadastroEquipamento;
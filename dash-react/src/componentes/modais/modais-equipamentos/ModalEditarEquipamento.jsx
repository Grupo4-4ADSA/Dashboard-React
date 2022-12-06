import React, { useState, useEffect } from "react";
import '../../../html-css-template/css/style-global.css';
import RespostaCerto from '../../respostas-crud/RespostaCerto';
import RespostaErro from '../../respostas-crud/RespostaErro';
import SelectEquipamento from '../../selects/SelectEquipamento';
import ImgInfo from '../../../html-css-template/imagens/simbolo-de-informacao.png'

import api from "../../../Api";

function ModalEditar(props) {

    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    const [requestSizes, setRequest] = useState([])

    const [salaEquip, setSalaEquip] = useState(props.nameRoom)

    const [name, setNameEquipament] = useState([])

    const [tipoEquip, setType] = useState(props.tipo)
    const [instalacaoEquip, setinstallation] = useState(props.instalacao)
    const [vidaUtilEquip, setLifespan] = useState(props.vidaUtil)
    const [potenciaEquip, setPotencyEquipment] = useState(props.potencia)
    const [qtdEquipmentEquip, setQtdEquipment] = useState(props.qtdEquipamento)
    const [portaEquip, setPorta] = useState(props.porta)

    const [idSala, setIdRoom] = useState([])
    const [idCln, setidCLNBox] = useState([])
    const [rooms, setRooms] = useState([])

    function editarEquipamento(event) {
        const dataInt = new Date(instalacaoEquip)
        if (typeof props.idEquipamentos !== "undefined") {
            event.preventDefault()
            api.Api.patch(`equipments/${props.idEquipamentos}`, {
                tipo: tipoEquip,
                instalacao: dataInt,
                vidaUtil: vidaUtilEquip,
                potencia: potenciaEquip,
                qtdEquipamento: qtdEquipmentEquip
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
                texto={"Editado com sucesso!"}
                closeRespostaCerto={
                    () => setRespostaCerto(false)} /> : <></>}

            {respostaErrado ? <RespostaErro
                texto={"Erro ao salvar alterações"}
                closeRespostaErro={
                    () => setRespostaErrado(false)} /> : <></>}

            <div className="modal-centro">
                <div id="cadastro" className="modal">
                    <button onClick={props.closeModalEditar} className="btn-close lado" >X</button>

                    <h2>Editar equipamento</h2>

                    <form onSubmit={editarEquipamento} className="cadastro-equipamento">

                        <span >Sala desse equipamento:
                            <span data-tooltip="Para alterar este campo entre em contato com o suporte">
                                <img src={ImgInfo} alt="" />
                            </span>
                        </span>

                        <input className="input-editar" type="text"
                            defaultValue={(`${props.nameRoom}`)}
                            onChange={e => setSalaEquip(e.target.value)} disabled
                        />

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
                            defaultValue={(`${props.installationDate}`)}
                            onChange={e => setinstallation(e.target.value)}
                        />

                        <div className="input-lado">
                            <span>Quantidade:</span>
                            <input type="number"
                                placeholder="Digite quantidade"
                                onChange={e => setQtdEquipment(e.target.value)}
                                maxLength="3" />
                        </div>

                        <div className="input-lado a">
                            <span>Potência:</span>
                            <input type="number"
                                placeholder="Digite potência"
                                defaultValue={(`${props.potencia}`)}
                                onChange={e => setPotencyEquipment(e.target.value)}
                                maxLength="5" />
                        </div>

                        <span>Vida útil em horas:</span>
                        <input type="number"
                            placeholder="Digite vida útil em horas"
                            defaultValue={(`${props.vidaUtil}`)}
                            onChange={e => setLifespan(e.target.value)}
                            maxLength="3" />

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

export default ModalEditar;
import React, { useState, useEffect } from "react";
import '../../../html-css-template/css/style-global.css';
import RespostaCerto from '../../respostas-crud/RespostaCerto';
import RespostaErro from '../../respostas-crud/RespostaErro';

import api from "../../../Api";
import SelectAndar from '../../selects/SelectAndar';

function ModalCadastroSalas(props) {
    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    const idPredio = sessionStorage.idPredio
    const [rooms, setRooms] = useState([]);
    const [nomeSala, setNomeSala] = useState([])
    const [andarSala, setAndarSala] = useState([])
    const [andar, setAndar] = useState([])
    const [idSala, setIdRoom] = useState([])

    function cadastrar(event) {
        event.preventDefault()
        console.log(nomeSala + " " + andarSala)
        api.Api.post("/rooms", {
            predio: {
                idPredio: idPredio
            },
            name: nomeSala,
            floor: andarSala
        }).then(response => {
            console.log(response.status)
            setRespostaCerto(true)
            setRespostaErrado(false)
            setTimeout(function () { window.location.reload() }, 2500)
        }).catch(erro => {
            console.log(erro)
            setRespostaErrado(true)
            setRespostaCerto(false)
        })


    }

    useEffect(() => {
        api.Api.get(`/rooms/${idPredio}`)
            .then(response => {
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    useEffect(() => {
        api.Api.get(`/predio/251`)
            .then(response => {
                setAndar(response.data)
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


            <div className="modal-centro ">
                <div id="cadastro" className="modal modal-sala">
                    <button onClick={props.closeModalCadastrar} className="btn-close lado" >X</button>

                    <h2>Cadastrar salas</h2>

                    <form onSubmit={cadastrar}>

                        <h4>Sala:</h4>

                        <input className="input-fild" autoFocus type="text" placeholder="Digite o nome da sala"
                            value={nomeSala} onChange={e => setNomeSala(e.target.value)} maxLength="20" />

                        <h4>Andar:</h4>

                        {andar.map(data => (
                            <SelectAndar
                                onChange={(e) => {
                                    if (e.target.value.indexOf("subsolo") >= 0) {
                                        setAndarSala(parseInt(e.target.value.replace('º Subsolo', ''), 10))
                                    } else if (e.target.value.indexOf("Terreo") >= 0) {
                                        setAndarSala(0)
                                    } else {
                                        setAndarSala(parseInt(e.target.value.replace('º Andar', ''), 10))
                                        console.log(parseInt(e.target.value.replace('º Andar', ''), 10))
                                    }
                                }}
                                subsolo={data.subsolos}
                                andar={data.andares}
                            />))}

                        <div className="espaco">
                            <button onClick={props.closeModalCadastrar} className="button-cinza button-modal">Cancelar</button>
                            <button className="button-azul lado button-modal" type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalCadastroSalas;
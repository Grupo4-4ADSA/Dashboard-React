import React, { useState } from "react";
import '../../../html-css-template/css/style-global.css';
import RespostaCerto from '../../respostas-crud/RespostaCerto';
import RespostaErro from '../../respostas-crud/RespostaErro';

import api from "../../../Api";

function ModalCadastroSalas(props) {
    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    const idPredio = sessionStorage.idPredio

    const [nomeSala, setNomeSala] = useState([])
    const [andarSala, setAndarSala] = useState([])

    function cadastrar(event) {
        event.preventDefault()
        console.log(nomeSala + " " + andarSala)
        api.Api.post("/rooms", {
            building:{
                idBuilding: idPredio
            },
            name: nomeSala,
            floor: andarSala
        }).then(response => {
            console.log(response.status)
            setRespostaCerto(true)
            setRespostaErrado(false)
            setTimeout(setRespostaCerto, 140000)
            window.location.reload()
        }).catch(erro => {
            console.log(erro)
            setRespostaErrado(true)
            setRespostaCerto(false)
            setTimeout(setRespostaErrado, 7000)
        })
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
                    <h2>Cadastrar salas</h2>
                    <form onSubmit={cadastrar}>
                        <h4>Sala:</h4>
                        <input className="input-fild" autoFocus type="text" placeholder="Digite o nome da sala"
                            value={nomeSala} onChange={e => setNomeSala(e.target.value)} maxLength="20" />
                        <h4>Andar:</h4>
                        <input type="text" placeholder="Digite o andar dessa sala"
                            value={andarSala} onChange={e => setAndarSala(e.target.value)}
                            maxLength="2" />

                        <button onClick={props.closeModalCadastrar} className="button-cinza button-modal">Cancelar</button>
                        <button className="button-azul lado button-modal" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalCadastroSalas;
import React, { useState, useEffect } from "react";
import '../../../html-css-template/css/style-global.css';
import RespostaCerto from '../../respostas-crud/RespostaCerto';
import RespostaErro from '../../respostas-crud/RespostaErro';
import SelectSala from '../../selects/SelectSala';
import SelectEquipamento from '../../selects/SelectEquipamento';
import ImgInfo from '../../../html-css-template/imagens/simbolo-de-informacao.png'
import api from "../../../Api";

function ModalCadastroEquipamento(props) {
    const [respostaCerto, setRespostaCerto] = useState(false)
    const [respostaErrado, setRespostaErrado] = useState(false)

    const [nomeSala, setNomeSala] = useState([])
    const [andarSala, setAndarSala] = useState([])
    const [idSala, setIdRoom] = useState([])
    const [rooms, setRooms] = useState([]);

    const idPredio = sessionStorage.idPredio

    useEffect(() => {
        api.Api.get(`/rooms/${idPredio}`)
            .then(response => {
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    })

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
                    <button onClick={props.closeModalEditar} className="btn-close lado" >X</button>

                    <h2>Editar equipamento</h2>

                    <form /* onSubmit={} */ className="cadastro-equipamento">

                        <h4>Selecionar salas: <span data-tooltip="Para alterar este campo entre em contato com o suporte"><img src={ImgInfo} alt="" /></span> </h4>
                        {
                            <SelectSala
                                onChange={(e) => {
                                    setIdRoom(e.target.value)
                                    console.log(idSala)
                                }}

                                data={rooms} />
                        }

                        <span>Tipo do equipamento</span>
                        <SelectEquipamento />

                        <span>Data da instalação:</span>
                        <input type="date"
                            value={andarSala}
                            onChange={e => setAndarSala(e.target.value)}
                        />

                        <div className="input-lado">
                            <span>Quantidade</span>
                            <input type="number"
                                value={nomeSala} onChange={e => setNomeSala(e.target.value)}
                                maxLength="3" />
                        </div>

                        <div className="input-lado a">
                            <span>Potência:</span>
                            <input type="number"
                                /* value={andarSala} */
                                onChange={e => setAndarSala(e.target.value)}
                                maxLength="5" />
                        </div>

                        <span>Vida útil em horas:</span>
                        <input type="number"
                            /*  value={vidaUtil} */
                            onChange={e => setAndarSala(e.target.value)}
                            maxLength="3" />

                        <div className="button-top">
                            <button onClick={props.closeModalCadastrar} className="button-cinza button-modal">Cancelar</button>
                            <button className="button-azul lado button-modal" type="submit">Atualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalCadastroEquipamento;
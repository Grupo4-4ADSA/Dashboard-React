import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-list.css';
import api from '../../Api';
import ListaAgendamento from '../../componentes/listas/ListaAgendamento';
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-branco.png';
import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgVoltar from '../../html-css-template/imagens/voltar.png';
import ModalCadastro from '../../componentes/modais/modais-painel-controle/CadastroAgendamento';
import ModalEditar from '../../componentes/modais/modais-salas/ModalEditar';
import ModalDeletar from '../../componentes/modais/modais-salas/ModalDeletar';

function PainelAgendamentoMarcado({ route, navigation }) {
    const [idRoom, setIdRoom] = useState([]);
    const [name, setName] = useState([]);
    const [floor, setFloor] = useState([]);

    function setVariavel(pName, pIdRoom, pFloor) {
        setName(pName)
        setIdRoom(pIdRoom)
        setFloor(pFloor)
        console.log(pName)
        setShowModalEditar(true)
    }

    function setVariavelDeletar(idRoom) {
        setIdRoom(idRoom)
        setShowModalDeletar(true)
    }

    /* Abre modal cadastrar*/
    
    const [showModalCadastrar, setShowModalCadastrar] = useState(false)
    const showOrHideCadastro = () => setShowModalCadastrar(true)

    /* Abre modal editar*/
    const [showModalEditar, setShowModalEditar] = useState(false)

    /* Abre modal deletar*/
    const [showModalDeletar, setShowModalDeletar] = useState(false)

    const navigate = useNavigate();

    const [rooms, setRooms] = useState([]);
    console.log(rooms)

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
            {showModalCadastrar ?
                <ModalCadastro
                    closeModalCadastrar={() =>
                        setShowModalCadastrar(false)}
                    openModalCadastrar={() =>
                        setShowModalCadastrar(true)}
                /> : <></>
            }

            {showModalEditar ?
                <ModalEditar
                    idRoom={idRoom}
                    name={name}
                    floor={floor}
                    closeModalEditar={() =>
                        setShowModalEditar(false)}
                /> : <></>
            }

            {showModalDeletar ?
                <ModalDeletar
                    idRoom={idRoom}
                    name={name}
                    floor={floor}
                    closeModalEditar={() =>
                        setShowModalDeletar(false)}
                /> : <></>
            }

            <div clas="container">

                <div class="superior">
                    <div class="nav-superior-esquerda">
                        <img src={LogoOnclnBranco} alt="Logo" />
                    </div>
                    <NavSupCentro />
                </div>

                <div class="container-dash">

                    <div class="nav-esquerda">
                        <NavEsquerdo />
                    </div>

                    <div class="conteudo">
                        <div className="box-select-button">
                            <img className="voltar" onClick={() => navigate(-1)} src={ImgVoltar} alt="" />
                            <h2>Agendamentos marcados</h2>

                            <button className=" lado button-azul" onClick={showOrHideCadastro} >Agendar horário</button>
                        </div>

                        <div className="list organiza-lista">
                            <table className="table-lista">
                                <li className="title-lista">
                                    <thead>
                                        <tr>
                                            <th >Sala</th>
                                            <th className="menor">Andar</th>
                                            <th className="menor">Data inicial</th>
                                            <th className="menor">Data final</th>
                                            <th className="menor">Hora</th>
                                            <th className="menor">Função</th>
                                            <th >Ação</th>
                                        </tr>
                                    </thead>
                                </li>

                                {
                                    rooms.map(rooms => (
                                        <ListaAgendamento
                                            update={setVariavel}
                                            delete={setVariavelDeletar}
                                            name={rooms.name}
                                            floor={rooms.floor}
                                            idRoom={rooms.idRoom}
                                        />
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PainelAgendamentoMarcado;
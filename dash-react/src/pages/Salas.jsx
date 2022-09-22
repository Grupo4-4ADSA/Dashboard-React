import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../html-css-template/css/style-global.css';
import '../html-css-template/css/style-list.css';
import api from '../Api';
import ListaSalas from '../componentes/listas/ListaSalas';
import LogoOnclnBranco from '../html-css-template/imagens/img-logo/logo-branco.png';
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import SelectsGerais from '../componentes/selects/SelectsGerais';
import ImgVoltar from '../html-css-template/imagens/voltar.png';
import ModalCadastro from '../componentes/modais/modais-salas/ModalCadastroSala';
import ModalEditar from '../componentes/modais/modais-salas/ModalEditar';
import ModalDeletar from '../componentes/modais/modais-salas/ModalDeletar';

function Sala() {
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

    const idPredio = sessionStorage.idPredio

    const [rooms, setRooms] = useState([]);
    console.log(rooms)

    useEffect(() => {
        api.Api.get(`/rooms/all/${idPredio}`)
            .then(response => {
                setRooms(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    })

    return (
        <>
            {showModalCadastrar ?
                <ModalCadastro
                    closeModalCadastrar={() =>
                        setShowModalCadastrar(false)}
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
                            <h2>Salas cadastradas</h2>

                            <SelectsGerais />

                            <button className=" lado button-azul" onClick={showOrHideCadastro} >Cadastrar Sala</button>
                        </div>

                        <div className="list organiza-lista">
                            <table className="table-lista">
                                <li className="title-lista">
                                    <thead>
                                        <tr>
                                            <th >Sala</th>
                                            <th >Andar</th>
                                            <th >Status</th>
                                            <th >Ação</th>
                                            <th ></th>
                                        </tr>
                                    </thead>
                                </li>

                                {
                                    rooms.map(rooms => (
                                        <ListaSalas
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

export default Sala;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-list.css';
import api from '../../Api';
import ListaEquipamento from '../../componentes/listas/ListaEquipamentos';
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-cln-branco.svg';
import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgVoltar from '../../html-css-template/imagens/voltar.svg';
import ModalCadastro from '../../componentes/modais/modais-equipamentos/ModalCadastroEquipamento';
import ModalEditar from '../../componentes/modais/modais-equipamentos/ModalEditarEquipamento';
import ModalDeletar from '../../componentes/modais/modais-equipamentos/ModalDeletarEquipamento';

function Equipamento() {

    const [idRoom, setIdRoom] = useState([]);
    const [name, setName] = useState([]);
    const [nameRoom, setNameRoom] = useState([]);
    const [idEquipamentos, setIdEquipamento] = useState([]);

    const [typeEquipament, setType] = useState([])
    const [installationDate, setinstallation] = useState([])
    const [qtdEquipment, setQtdEquipment] = useState([])
    const [potencyEquipment, setPotencyEquipment] = useState([])
    const [lifespanEquipament, setLifespan] = useState([])
    const [porta, setPorta] = useState([])

    function setVariavel(pidEquip, pTypeEquipament,
        pInstallationDate, pLifespanEquipament, pPotencyEquipment, pQtdEquipment, pnameRoom) {
        setIdEquipamento(pidEquip)
        setType(pTypeEquipament)
        setinstallation(pInstallationDate)
        setQtdEquipment(pQtdEquipment)
        setPotencyEquipment(pPotencyEquipment)
        setLifespan(pLifespanEquipament)
        setNameRoom(pnameRoom)
        setShowModalEditar(true)
    }

    function setVariavelDeletar(idEquipamentos) {
        setIdEquipamento(idEquipamentos)
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

    // const idPredio = sessionStorage.idPredio

    const [rooms, setRooms] = useState([]);
    const [equips, setEquips] = useState([]);

    useEffect(() => {
        api.Api.get(`/equipments/predio/${idPredio}`)
            .then(response => {
                setEquips(response.data)
                // console.log(idSala)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

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
                /> : <></>
            }

            {showModalEditar ?
                <ModalEditar
                    idEquipamentos={idEquipamentos}
                    typeEquipament={typeEquipament}
                    installationDate={installationDate}
                    qtdEquipment={qtdEquipment}
                    potencyEquipment={potencyEquipment}
                    qtdEquipamento={lifespanEquipament}
                    nameRoom={nameRoom}
                    closeModalEditar={() =>
                        setShowModalEditar(false)}
                /> : <></>
            }

            {showModalDeletar ?
                <ModalDeletar
                    name={name}
                    idEquipamento={idEquipamentos}
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
                            <h2>Equipamentos cadastrados: {equips.length}</h2>
                            <button className=" lado button-azul" onClick={showOrHideCadastro} >Cadastrar Equipamento</button>
                        </div>

                        <div className="titulo">
                            <table className="table-lista">
                                <thead>
                                    <tr>
                                        <th >Tipo</th>
                                        <th >Id</th>
                                        <th >Sala</th>
                                        <th >Andar</th>
                                        <th >Ação</th>
                                        <th ></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <div className="list organiza-lista">
                            <table className="table-lista">

                                {
                                    equips.map(equips => (
                                        <ListaEquipamento
                                            update={setVariavel}
                                            delete={setVariavelDeletar}
                                            nameRoom={equips.clnBox.sala.name}
                                            floor={equips.clnBox.sala.floor}
                                            type={equips.tipo}
                                            idEquipamento={equips.idEquipamento}
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

export default Equipamento;
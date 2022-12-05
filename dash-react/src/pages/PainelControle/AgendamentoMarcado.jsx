import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-list.css';
import api from '../../Api';
import ListaAgendamento from '../../componentes/listas/ListaAgendamento';
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-cln-branco.svg';
import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgVoltar from '../../html-css-template/imagens/voltar.svg';
import ModalCadastro from '../../componentes/modais/modais-painel-controle/CadastroAgendamento';
import ModalEditar from '../../componentes/modais/modais-painel-controle/EditarAgendamento';
import ModalDeletar from '../../componentes/modais/modais-painel-controle/DeletarAgendamento';

function PainelAgendamentoMarcado({ route, navigation }) {
    const [idSala, setIdRoom] = useState([]);
    const [name, setName] = useState([]);
    const [floor, setFloor] = useState([]);
    const [idAgendamentos, setIdAgendamento] = useState([]);
    const [dataStart, setDataStart] = useState([])
    const [hour, setHour] = useState([])
    const [on, setOn] = useState([])
    const [nameRoom, setNameRoom] = useState([]);


    function setVariavel(pnameRoom, pIAgendamento, pData, pHorario, pLigar, pIdSala) {
        setIdAgendamento(pIAgendamento)
        setDataStart(pData)
        setNameRoom(pnameRoom)
        setHour(pHorario)
        setOn(pLigar)
        setIdRoom(pIdSala)
        setShowModalEditar(true)
    }

    function setVariavelDeletar(idAgendamentos) {
        setIdAgendamento(idAgendamentos)
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
    const [scheduling, setAgendamentos] = useState([]);
    console.log(rooms)

    const idPredio = sessionStorage.idPredio

    useEffect(() => {
        api.Api.get(`/agendamentos/predio/${idPredio}`)
            .then(response => {
                if (response.status === 200) {
                    setAgendamentos(response.data)
                }
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
                    idScheduling={idAgendamentos}
                    dataStart={dataStart}
                    hour={hour}
                    on={on}
                    sala={idSala}
                    closeModalEditar={() =>
                        setShowModalEditar(false)}
                /> : <></>
            }

            {showModalDeletar ?
                <ModalDeletar
                    idScheduling={idAgendamentos}
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

                        <div className="titulo">
                            <table className="table-lista">
                                <thead>
                                    <th >Sala</th>
                                    <th className="menor">Id</th>
                                    <th className="menor">Andar</th>
                                    <th className="menor">Data inicial</th>
                                    <th className="menor">Hora</th>
                                    <th className="menor">Função</th>
                                    <th >Ação</th>
                                </thead>
                            </table>
                        </div>

                        <div className="list organiza-lista">
                            <table className="table-lista">
                                {
                                    scheduling.map(scheduling => (
                                        <ListaAgendamento
                                            update={setVariavel}
                                            delete={setVariavelDeletar}
                                            nameRoom={scheduling.sala.name}
                                            floor={scheduling.sala.floor}
                                            idScheduling={scheduling.idAgendamento}
                                            date={scheduling.data}
                                            hour={scheduling.horario}
                                            acao={scheduling.ligar}
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
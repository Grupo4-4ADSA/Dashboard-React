import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-list.css';
import api from '../../Api';
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-cln-branco.svg';
import ListaOnClnBox from '../../componentes/listas/ListaOncln';
import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';


import ImgVoltar from '../../html-css-template/imagens/voltar.svg';

import ModalCadastro from '../../componentes/modais/modais-on-cln/CadastrarOnClnBox';

function OnClnBox() {
    const [idRoom, setIdRoom] = useState([]);
    const [name, setName] = useState([]);
    const [floor, setFloor] = useState([]);
    /* Abre modal cadastrar*/
    const [showModalCadastrar, setShowModalCadastrar] = useState(false)
    const showOrHideCadastro = () => setShowModalCadastrar(true)

    const navigate = useNavigate();

    const [clnbox, setClnbox] = useState([]);
    console.log(clnbox)

    useEffect(() => {
        api.Api.get("/clnboxex")
            .then(response => {
                if (response.status === 200) {
                    setClnbox(response.data)
                }
                setClnbox(response.data[0].clnBox.sala.name)
                console.log(response)
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
                            <h2>OnCln-Box cadastrados {clnbox.length}</h2>
                            <button className=" lado button-azul" onClick={showOrHideCadastro} >Cadastrar OnCln-Box</button>
                        </div>

                        <div className="centro ">
                            <div className="list organiza-lista">

                                {
                                    clnbox.map(clnbox => (
                                        <ListaOnClnBox
                                            idCLNBox={clnbox.idCLNBox}
                                            name={clnbox.sala.name}
                                            floor={clnbox.sala.floor}
                                            idRoom={clnbox.idRoom}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default OnClnBox;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../html-css-template/css/style-global.css';
import '../../html-css-template/css/style-list.css';
import api from '../../Api';
import ListaEquipamentoConsumo from '../../componentes/listas/ListaEquipamentosConsumo';
import LogoOnclnBranco from '../../html-css-template/imagens/img-logo/logo-branco.png';
import NavSupCentro from '../../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../../componentes/navbar/NavEsquerdo';
import ImgVoltar from '../../html-css-template/imagens/voltar.png';

function Sala() {
    const navigate = useNavigate();

    const [equips, setEquips] = useState([]);
    
    function setIdEquipment(equipment){
        sessionStorage.idEquipment = equipment
    }

    useEffect(() => {
        api.Api.get(`/equipments`)
            .then(response => {
                setEquips(response.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    })


    return (
        <>

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
                            <h2>Equipamentos cadastrados</h2>

                        </div>

                        <div className="list organiza-lista">
                            <table className="table-lista">
                                <li className="title-lista">
                                    <thead>
                                        <tr>
                                            <th >Equipamento</th>
                                            <th >Sala</th>
                                            <th >Andar</th>
                                            <th >Estado</th>
                                            <th ></th>
                                        </tr>
                                    </thead>
                                </li>

                                {

                                    equips.map(equips => (
                                        <ListaEquipamentoConsumo

                                            nameRoom={equips.nameRoom}
                                            floor={equips.floor}
                                            type={equips.type}
                                            idEquipment={equips.idEquipment}
                                            setIdEquipment={setIdEquipment}
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
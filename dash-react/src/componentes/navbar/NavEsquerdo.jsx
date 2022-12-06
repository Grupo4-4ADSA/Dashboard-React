
import React, { useEffect } from "react";
import '../../html-css-template/css/style-global.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ItemNavEsq(props) {
    const navigate = useNavigate()

    useEffect(() => {
        if (sessionStorage.nomeGestor === undefined) {
            navigate("/")
        }
    }, [])

    function logoff() {
        sessionStorage.clear()
        navigate("/")
    }

    return (
        <>
            <ul class=" list-nav-esqueda">
                <li><Link to="/home">Home</Link> </li>
                <li><Link to="/cadastrar-ou-editar">Cadastrar/Editar</Link></li>
                <li><Link to="/salas">Salas</Link></li>
                <li><Link to="/equipamentos">Equipamentos</Link></li>
                <li><Link to="/painel-controle">Painel de controle</Link></li>
                <li><Link to="/resumo-consumo">Resumo de consumo</Link></li>
                <li><Link to="/central-ajuda">Central de ajuda</Link></li>
                <li onClick={logoff}> Sair</li>
            </ul>
        </>
    )
}

export default ItemNavEsq;
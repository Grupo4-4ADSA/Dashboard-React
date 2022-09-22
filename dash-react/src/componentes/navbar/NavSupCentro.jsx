import React, { useEffect} from "react";
import '../../html-css-template/css/style-global.css';
import IconAvatar from '../../html-css-template/imagens/img-info-user/usuario.png';
import IconConfig from '../../html-css-template/imagens/img-info-user/configuracao.png';
import { useNavigate} from "react-router-dom";

function ItemNavSupCen(props) {

    const nome = sessionStorage.nomeGestor

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
            <div class="nav-superior-central">
                <input class="input-field:first-child" type="text" placeholder="Pesquisar.." img />
            </div>

            <div class="nav-info">
                <span>{nome}</span>
                <img class="user" src={IconAvatar} alt="" />
                <img class="config" src={IconConfig} alt="" />
            </div>
        </>
    )
}

export default ItemNavSupCen;
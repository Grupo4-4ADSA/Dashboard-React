import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import HomeDash from "./pages/HomeDash"
import CadastraEdita from "./pages/Cadastros/CadastrarEditar";
import Salas from "./pages/Salas";
import PainleDeControle from "./pages/PainelControle/PainelDeControle";
import ConsumoEquipamento from "./pages/ConsumoEquipamento/ConsumoEquipamento";
import ResumoConsumo from "./pages/ResumoConsumo";
import CentralAjuda from "./pages/CentralAjuda";
import Equipamentos from "./pages/Cadastros/Equipamentos";
import OnClnbox from "./pages/Cadastros/OnClnBox";
import AgendamentoMarcado from "./pages/PainelControle/AgendamentoMarcado";
import SalaEmUso from "./pages/PainelControle/SalasEmUso";
import Erro404 from "./pages/Erro404";
import ConsumoPorEquipamento from "./pages/ConsumoEquipamento/ConsumoPorEquipamento";

import PainleDeControleSalas from "./pages/PainelControle/PainelControleSalas";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/home" exact element={<HomeDash />} />
                <Route path="/cadastra-edita" exact element={<CadastraEdita />} />
                <Route path="/salas" exact element={<Salas />} />
                <Route path="/painel-controle" exact element={<PainleDeControle />} />
                <Route path="/consumo-equipamento" exact element={<ConsumoEquipamento />} />
                <Route path="/resumo-consumo" exact element={<ResumoConsumo />} />
                <Route path="/central-ajuda" exact element={<CentralAjuda />} />
                <Route path="/painel-controle-salas" exact element={<PainleDeControleSalas />} />
                <Route path="/equipamentos" exact element={<Equipamentos />} />
                <Route path="/on-cln-box" exact element={<OnClnbox />} />
                <Route path="/painel-de-controle-agendamento-marcado" exact element={<AgendamentoMarcado />} />
                <Route path="/painel-de-controle-salas-em-uso" exact element={<SalaEmUso />} />
                <Route path="/erro-404" exact element={<Erro404 />} />
                <Route path="/consumo-por-equipamento" exact element={<ConsumoPorEquipamento />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
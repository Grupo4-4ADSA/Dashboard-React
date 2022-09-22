import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavSupCentro from '../componentes/navbar/NavSupCentro';
import NavEsquerdo from '../componentes/navbar/NavEsquerdo';
import Chart from '../componentes/consumo/Chart';
import TableConsumo from '../componentes/consumo/TableResumoConsumo';
import ImgVoltar from '../html-css-template/imagens/voltar.png';
import LogoOnclnBranco from '../html-css-template/imagens/img-logo/logo-branco.png';

import api from "../Api";

function TableResumo(props) {
    const navigate = useNavigate();

    const [selectMes, setSelectMes] = useState([]);
    const [selectAno, setSelectAno] = useState([]);
    const fileInput = useRef(null);
    const idPredio = sessionStorage.idPredio
    // const idPredio = sessionStorage.idPredio;


    function geracaoCsv(e) {
        api.Api.get(`/reports/csv`, {
            idPredio: idPredio,
            mes: selectMes,
            ano: selectAno
        }).then(response => {
            console.log("Donwload realizado com sucesso")
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'relatorio-AUTG-CLN.csv');
            document.body.appendChild(link);
            link.click();
        }).catch(erro => {
            console.log("Deu ruim: " + erro)
        });
    }

    function geracaoTxt() {
        api.Api.get(`/reports/txt`, {
            idPredio: idPredio,
            mes: selectMes,
            ano: selectAno
        }).then(response => {
            console.log("Donwload realizado com sucesso")
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'relatorio-AUTG-CLN.txt');
            document.body.appendChild(link);
            link.click();
        }).catch(erro => {
            console.log("Deu ruim")
        });
    }

    function carregarArquivo(event) {
        fileInput.current.click();
    }

    function gerarImportacao(event) {
        event.preventDefault();
        const data = new FormData();
        const file = event.target.files[0]
        data.append("file", file)

        api.Api.post(`/relatorios/importacao/${idPredio}`,
            data
        ).then(response => {
            console.log(response.status)
        }).catch(erro => {
            console.log("Erro ao tentar importar arquivo txt" + erro)
        })
    }


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
                        <img className="voltar" onClick={() => navigate(-1)} src={ImgVoltar} alt="" />

                        <div className="conteudo-scroll conteudo-chart">

                            <h2 >Resumo de consumo Mensal</h2>
                            <Chart />

                            <h2 className="h2-titulo">Dados de consumo geral</h2>

                            <div classNameName="box-select">
                                <select name="select-mes"
                                    className="select-menor"
                                    value={selectMes}
                                    onChange={e => setSelectMes(e.target.value)}>
                                    <option selected disabled>Escolha o mês</option>
                                    <option value="1">Janeiro</option>
                                    <option value="2">Fevereiro</option>
                                    <option value="3">Março</option>
                                    <option value="4">Abril</option>
                                    <option value="5">Maio</option>
                                    <option value="6">Junho</option>
                                    <option value="7" disabled>Julho</option>
                                    <option value="8" disabled>Agosto</option>
                                    <option value="9" disabled>Setembro</option>
                                    <option value="10" disabled>Outubro</option>
                                    <option value="11" disabled>Novembro</option>
                                    <option value="12" disabled>Dezembro</option>
                                </select>

                                <select name="select-ano"
                                    className="select-menor"
                                    value={selectAno}
                                    onChange={e => setSelectAno(e.target.value)}>
                                    <option selected disabled>Escolha o ano</option>
                                    <option value="2022">2022</option>
                                </select>

                                <input onChange={gerarImportacao} hidden ref={fileInput} type={"file"} name={"file"} accept={".txt"} />
                                <button className="button-azul" onClick={carregarArquivo}>Importação .txt</button><br />

                                <button className="button-azul" onClick={() => window.print()}>Imprimir relatório</button>

                                <button className="button-azul" onClick={e => geracaoCsv(e)}>Relatório .csv</button>
                                <button className="button-azul" onClick={e => geracaoTxt(e)}>Relatório .txt</button>

                            </div>

                            <TableConsumo />

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TableResumo;
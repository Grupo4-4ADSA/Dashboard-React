import React from "react";

function TableResumo(props) {

    return (
        <>
            <table class="tg">
                <thead>
                    <tr>
                        <th class="tg-grh6" colspan="5">Dados de consumo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tg-0pky">AUTG</td>
                        <td class="tg-0pky">Mês 02 Ano 2022</td>
                        <td class="tg-73oq" colspan="3"></td>
                    </tr>
                    <tr>
                        <td class="tg-grh6" colspan="5">Informações do Responsável</td>
                    </tr>
                    <tr>
                        <td class="tg-0thz">Nome&nbsp;&nbsp;&nbsp;responsável</td>
                        <td class="tg-0thz">Razão social</td>
                        <td class="tg-0thz">Cnpj</td>
                        <td class="tg-73oq" colspan="2" rowspan="2"></td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">Marcos</td>
                        <td class="tg-0pky">Sptech</td>
                        <td class="tg-0pky">14.795.960/0001-08</td>
                    </tr>
                    <tr>
                        <td class="tg-grh6" colspan="5">Informações do prédio</td>
                    </tr>
                    <tr>
                        <td class="tg-g7sd">Prédio</td>
                        <td class="tg-g7sd">Nome do prédio</td>
                        <td class="tg-g7sd">Logradouro</td>
                        <td class="tg-g7sd">Número</td>
                        <td class="tg-g7sd">Cep</td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">1</td>
                        <td class="tg-0pky">Digital Building</td>
                        <td class="tg-0pky">Haddock Lobo</td>
                        <td class="tg-0pky">595</td>
                        <td class="tg-0pky">02984-090</td>
                    </tr>
                    <tr>
                        <td class="tg-grh6" colspan="5">Consumo Mensal</td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">Sala</td>
                        <td class="tg-0pky">Andar</td>
                        <td class="tg-0pky">Consumo kwm</td>
                        <td class="tg-0pky">Bandeira</td>
                        <td class="tg-0pky">Pre‡o</td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">A</td>
                        <td class="tg-0pky">1</td>
                        <td class="tg-0pky">150.696</td>
                        <td class="tg-0pky">Amarela</td>
                        <td class="tg-0pky">R$ 43,31</td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">A</td>
                        <td class="tg-0pky">1</td>
                        <td class="tg-0pky">150.696</td>
                        <td class="tg-0pky">Amarela</td>
                        <td class="tg-0pky">R$ 43,31</td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">A</td>
                        <td class="tg-0pky">1</td>
                        <td class="tg-0pky">150.696</td>
                        <td class="tg-0pky">Amarela</td>
                        <td class="tg-0pky">R$ 43,31</td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">A</td>
                        <td class="tg-0pky">1</td>
                        <td class="tg-0pky">150.696</td>
                        <td class="tg-0pky">Amarela</td>
                        <td class="tg-0pky">R$ 43,31</td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">A</td>
                        <td class="tg-0pky">1</td>
                        <td class="tg-0pky">150.696</td>
                        <td class="tg-0pky">Amarela</td>
                        <td class="tg-0pky">R$ 43,31</td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">A</td>
                        <td class="tg-0pky">1</td>
                        <td class="tg-0pky">150.696</td>
                        <td class="tg-0pky">Amarela</td>
                        <td class="tg-0pky">R$ 43,31</td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">A</td>
                        <td class="tg-0pky">1</td>
                        <td class="tg-0pky">150.696</td>
                        <td class="tg-0pky">Amarela</td>
                        <td class="tg-0pky">R$ 43,31</td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">A</td>
                        <td class="tg-0pky">1</td>
                        <td class="tg-0pky">150.696</td>
                        <td class="tg-0pky">Amarela</td>
                        <td class="tg-0pky">R$ 43,31</td>
                    </tr>
                    <tr>
                        <td class="tg-p7m4">Resumo</td>
                        <td class="tg-p7m4">R$</td>
                        <td class="tg-0pky" colspan="3" rowspan="3"></td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">Total gasto Kwm:</td>
                        <td class="tg-0pky">1205568,00</td>
                    </tr>
                    <tr>
                        <td class="tg-0pky">Total gasto R$:</td>
                        <td class="tg-0pky">R$ 346,48</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TableResumo;
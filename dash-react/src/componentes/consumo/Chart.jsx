import React, { Component } from "react";
import Chart from "react-google-charts";

const data = [
  ['Year', 'Mês', { role: 'style' }],
  ['Jan', 15.000, 'color: #2E495C'],
  ['Fev', 15.000, 'color: #2E495C'],
  ['Mar', 14.060, 'color: #2E495C'],
  ['Abr', 13.020, 'color: #2E495C'],
  ['Mai', 15.000, 'color: #2E495C'],
  ['Jun', 12.070, 'color: #2E495C'],
  ['Jul', 15.050, 'color: #2E495C'],
  ['Ago', 13.030, 'color: #2E495C'],
  ['Set', 15.060, 'color: #2E495C'],
  ['Out', 12.000, 'color: #2E495C'],
  ['Nov', 15.000, 'color: #2E495C'],
  ['Dez', 13.000, 'color: #2E495C'],
];


class GoogleChart extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {super(props)}

  render() {
    return (
      <div className="box-chart mt-1">
        <h3>Gráfico de consumo R$</h3>
        <Chart
          width={550}
          height={260}
          data={data}
          backgroundColor='#E4E4E4'
          chartType="ColumnChart"
          loader={<div>Loading Chart...</div>
          }
        />
      </div>
    )
  }
}

export default GoogleChart;
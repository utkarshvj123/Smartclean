import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {chart} from '../../constants/data';
import '../style.scss';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: "100%",
  height: 500,
  dataFormat: 'json',
  dataSource: chart,
  maxLabelWidthPercent: 100
};

export default class BarChart extends Component {
  render () {
    return <ReactFC {...chartConfigs} />;
  }
}

ReactDOM.render(
  <BarChart  />,
  document.getElementById('root'),
);


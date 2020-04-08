import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import * as Highcharts from "highcharts";
import PropTypes from "prop-types";

export default class HighCharts extends Component {
  render() {
    const { requireData, title } = this.props;
    const options = (Highcharts.Options = {
      series: requireData,
    });

    return (
      <HighchartsReact
        constructorType={"chart"}
        highcharts={Highcharts}
        options={options}
        {...HighchartsReact.Props}
      />
    );
  }
}

HighCharts.defaultProps = {
  response: [{ name: "default", data: [1, 2, 3] }],
};
HighCharts.propTypes = {
  response: PropTypes.array,
};

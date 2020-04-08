import React, { Component } from "react";
import HighCharts from "../../../components/HighCharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  ${(props) => props.styleContainer}
`;

export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      other:[]
    };
  }
  componentDidMount() {
    let result = {};
    Object.keys(this.props.data[0]).forEach((key) => {
      result[key] = [];
    });

    this.props.data.forEach((obj) => {
      Object.keys(result).forEach((key) => {
        let arr = result[key];
        arr.push(obj[key]);
        result[key] = arr;
      });
    });

    let arrayRequired1 = [];

    this.props.data.map(function (obj) {
      if (obj.hasOwnProperty("insid")) {
        arrayRequired1.push(obj.insid);
      }
      return arrayRequired1;
    });

    let arrayRequired = [];
    Object.keys(result).forEach((key) => {
      if (key !== "insid")
        return arrayRequired.push({
          name: key.charAt(0).toUpperCase() + key.slice(1),
          data: result[key],
        });
    });
    this.setState({
      other:arrayRequired1,
      data: arrayRequired,
    });
  }
  render() {
    return (
      <ChartContainer>
        <HighCharts requireData={this.state.data} other={this.state.other} title={"SmartClean"} />{" "}
      </ChartContainer>
    );
  }
}

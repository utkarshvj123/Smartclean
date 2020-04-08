import React from "react";
import { MDBDataTable } from "mdbreact";
import { jsonCreation } from "../../constants/globalCommonFunctions.js";

const DatatablePage = (props) => {
  const data = {
    columns: jsonCreation(props.data),
    rows: props.data,
  };

  return (
    <MDBDataTable
      scrollY={false}
      responsive
      striped
      bordered
      small
      data={data}
    />
  );
};

// const mapStateToProps = ({ homeData }) => {
//   return { data:homeData };
// };

export default DatatablePage;

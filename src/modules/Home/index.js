import React, { Component } from "react";
import Table from "../../components/Table";
import Navbar from "../../components/Navbar";
import { connect } from "react-redux";
import { authenticateUserAction } from "../Login/actions";
import { bindActionCreators } from "redux";
import { findValueWithIndex } from "../../constants/globalCommonFunctions";
import TabHeaders from "../../components/TabsHeaders";
import Charts from "./Charts";
import styled from "styled-components";

const Container = styled.div`
  margin: 10%;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabName: "",
      activeTabIndex: 0,
      tab: [
        {
          id: 1,
          name: "Table",
        },
        {
          id: 2,
          name: "Charts",
        },
      ],
    };
  }

  logOutUser = () => {
    this.props.authenticateUserAction(false);
  };

  componentDidMount() {
    const tabName = findValueWithIndex(
      this.state.tab,
      this.state.activeTabIndex,
      "name"
    );
    this.setState({
      activeTabName: tabName,
    });
  }

  /*
   **For data set or creating html with dynamic fields
   */

  dataListcreation = [
    {
      name: "Logout",
      type: "button",
      class: "btn btn-primary",
      click: this.logOutUser,
    },
  ];

  selectedTab = (index, value) => {
    this.setState({ activeTabIndex: index, activeTabName: value.name });
  };

  render() {
    const { tab, activeTabName } = this.state;
    return (
      <div>
        <Navbar listView={this.dataListcreation} sideBarVisibility={false}>
          <TabHeaders
            sectionTabs={tab}
            mobileHeaderCss={{
              fontWeight: 200,
              borderBottom: "0",
              height: "61px !important",
            }}
            mobileTabCss={{
              cursor: "pointer",
              textAlign: "center",
              opacity: 1,
              color: "black",
              padding: "1.5rem 2rem 1rem",
              fontWeight: "500",
              textTransform: "capitalize",
              height: "61px !important",
            }}
            tabCss={{
              cursor: "pointer",
              textAlign: "center",
              opacity: 1,
              color: "black",
              padding: "1.5rem 2rem 1rem",
              fontWeight: "500",
              textTransform: "capitalize",
              height: "61px !important",
              borderBottom: "0",
            }}
            switchTab={this.selectedTab}
            activeSection={activeTabName ? activeTabName : ""}
          />
        </Navbar>
        <Container>
          {this.state.activeTabName === "Table" ? <Table data={this.props.homeData}/> : <Charts data={this.props.homeData}/>}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ isValidUser,homeData }) => {
  return { isValidUser,homeData };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ authenticateUserAction }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

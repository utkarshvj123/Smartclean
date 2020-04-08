import React from "react";
import { withRouter } from "react-router-dom";
import SideBar from "../../components/Sidebar";
import NavBar from "../../components/Navbar";
import InfoCard from "../../components/InfoCard";
import BarChart from "../../components/BarChart";
import Calender from "../../components/Calender";
import "./style.scss";
import styled from "styled-components";
import { data } from "../../constants/data";

const GirdCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  margin: 20px 0px;
  @media screen and (max-width: 767px) and (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarCss: true,
      data: [],
    };
  }
  componentDidMount() {
    this.setState({ data });
    if (localStorage.getItem("email") === "") {
      this.props.history.push("/landing-page");
    } else {
      console.log("correct");
    }
  }
  sideBarCollapse = (value) => {
    this.setState({ navBarCss: !this.state.navBarCss });
  };

  listValue = [
    { name: "Home", type: "li" },
    { name: "Qbook", type: "li" },
    { name: "Admin Panel", type: "li" },
    {
      name: "User Name",
      type: "li",
    },
  ];

  render() {
    return (
      <React.Fragment>
        <div className="side-main">
          <SideBar
            handleNavBar={this.sideBarCollapse}
            navBarCss={
              this.state.navBarCss ? "sidebar closeNav" : "sidebar openNav"
            }
          />
          <div
            className={
              this.state.navBarCss ? "container-main" : "container-main-width"
            }
          >
            <div>
              <NavBar
                listView={this.listValue}
                sideBarVisibility={true}
                forClassCss={this.state.navBarCss}
                handleNavBar={this.sideBarCollapse}
              />
            </div>
            <div className="main-container">
              <div>
                <InfoCard dataGet={this.state.data}></InfoCard>
              </div>
              <GirdCard>
                <div>
                  <BarChart></BarChart>
                </div>
                <div>
                  <Calender></Calender>
                </div>
              </GirdCard>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Dashboard);

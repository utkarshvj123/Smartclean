import React, { Component } from "react";
import "../style.scss";
import "../../assets/styles/variable.scss";
import PropTypes from "prop-types";



export default class Navbar extends Component {
  render() {
    const { sideBarVisibility, handleNavBar, listView } = this.props;
  
    let list = require("../../assets/images/list.png");
    let close = require("../../assets/images/close.png");
    return (
      <React.Fragment>
        <div className="nav-bar">
          <div>
            {sideBarVisibility ? (
              <div className="menu-icon" onClick={() => handleNavBar("navbar")}>
                <img
                  src={handleNavBar ? list : close}
                  width="22"
                  height="18"
                  alt=""
                />
              </div>
            ) : (
              "SmartClean"
            )}
          </div>
        <div>
          {this.props.children}
        </div>
          <div>
            <ul className="custom-list">
              {listView.map((obj) => (
                <obj.type
                  className={obj.class ? obj.class : ""}
                  onClick={obj.click}
                  key={obj.name}
                >
                  {obj.name}
                </obj.type>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Navbar.defaultProps = {
  handleNavBar: () => {},
  sideBarVisibility: true,
  listView: [{ name: "default", type: "li" }],
  navBarTitle:"Default"
};
Navbar.propTypes = {
  handleNavBar: PropTypes.func,
  sideBarVisibility: PropTypes.bool,
  listView: PropTypes.array,
  navBarTitle:PropTypes.string
};

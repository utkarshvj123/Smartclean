import React, { Component } from 'react';
import '../style.scss';
import '../../assets/styles/variable.scss';

export default class SideBar extends Component {
    render() {
        const { navBarCss } = this.props;
        return (
            <React.Fragment>
                <div href="#" className={navBarCss}>
                    <div className="nav-content">Qbook Admin Panel</div>
                    <div>
                        <a href="/">
                             <img src={require('../../assets/images/home-run.png' )} width="16" height="16" alt="" />
                         <div className="pl-2">Dashboard</div>
                        </a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

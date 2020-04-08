import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const { customName, btnName, handleInput } = this.props;
        return (
            <React.Fragment>
                <button className={customName} onChange={(e)=>handleInput(e)}>{btnName}</button>
            </React.Fragment>
        )
    }
}

import React, { Component } from 'react'

export default class Input extends Component {



    render() {
        const {handleInput,value,disabled,classForCss,styleCss,placeHolder,typeInput,nameInput}=this.props;
        return (
            <React.Fragment>
                    <input type={typeInput} autoComplete="off" name={nameInput} className={classForCss} value={value} onChange={(e)=>handleInput(e.target.value,e.target.name)}
                      placeholder={placeHolder} style={styleCss}/>
            </React.Fragment>
        )
    }
}
// disabled={disabled === true ? true : false}
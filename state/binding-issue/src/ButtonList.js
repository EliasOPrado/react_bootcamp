import React, { Component } from 'react';

class ButtonList extends Component {
    static defaultProps = {
        colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b", "#0000"]
    };

    render(){
        /*
        In this component the prop color will be iterated with 
        the method map() and settled as style of each color.
        So, if there are five color it will show five buttons with
        its own color. 
        */
        return (
            <div className="ButtonList">
                
                {this.props.colors.map(c => {
                    const colorObjs = {backgroundColor: c};
                    return <button style={colorObjs}> Cick on me!</button>;
                })}
            </div>
        );
    }
}

export default ButtonList;
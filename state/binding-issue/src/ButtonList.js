import React, { Component } from 'react';

class ButtonList extends Component {
    static defaultProps = {
        colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b", "#0000"]
    };

    constructor(props){
        super(props);
        this.state = {color: "cyan"}
    }

    changeColor(newColor){
        // will add the paramenter in newColor
        // in this case "c" is the parameter 
        this.setState({color: newColor})
    }

    render(){
        /*
        In this component the prop color will be iterated with 
        the method map() and settled as style of each color.
        So, if there are five color it will show five buttons with
        its own color. 
        */
        return (
            // this.state.color is not equal to props
            <div className="ButtonList" style={{backgroundColor: this.state.color}}>
                {this.props.colors.map(c => {
                    const colorObjs = {backgroundColor: c};
                    // approach 1 onClick={this.changeColor.bind(this, c) BAD
                    // approach 2 =>>> onClick={() => this.changeColor(c)} GOOD <<<=====
                    return <button style={colorObjs} onClick={() => this.changeColor(c)}> 
                    Cick on me!
                    </button>;
                })}
            </div>
        );
    }
}


export default ButtonList;
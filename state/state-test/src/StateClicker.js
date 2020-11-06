import React, { Component } from 'react';

class StateClicker extends Component {

    constructor(props){
        super(props);
        this.state = {number: 1}
        this.changeNumber = this.changeNumber.bind(this);
    };

    changeNumber(e){
        let changeNum = Math.floor(Math.random() * this.props.randNum);
        this.setState({number: changeNum})
    }
    render(){
        return(
            <div>
                <h1>Number is {this.state.number}</h1>
                {this.state.number === 4 
                ? <h2>You win</h2> 
                :<button onClick={this.changeNumber}>Click Me</button>}
            </div>
        )
    }
}

export default StateClicker;
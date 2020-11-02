import React, {Component} from 'react';

class Rando extends Component {
    constructor(props){
        super(props);
        this.state = { num:0 };
        this.makeTimer();
    }
// function to create a changing state
makeTimer(){
    // Interval to change the state using the Rand prop
    setInterval(() => {
        // set rand var to change based the props maxNum value
        let rand = Math.floor(Math.random() * this.props.maxNum);
        // add the rand var to the state as rand
        this.setState({num: rand});
    },1000);
}
    render(){
        return (
        <h1>{this.state.num}</h1>
        )
    }
}

export default Rando;
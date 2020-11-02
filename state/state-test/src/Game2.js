import React, { Component } from 'react';

class Game2 extends Component {
    // You will need to use create-react-app to use this approach
    // this is not real javascript
    state = {
        score: 99,
        gameOver: false
    }
    render(){
        return (
        <h1>Your score is: {this.state.score}</h1>
        )
    }
}

export default Game2; 

// the reall approach for react state (as real JS) is as follow:

// constructor(props){
    // SUPER has to be standard.. Always add it in constructor...
//     super(props)
//     this.state = {
//         score:99,
//         gameOver: false
//     };
// }
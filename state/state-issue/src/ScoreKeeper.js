import React, {Component} from 'react';

class ScoreKeeper extends Component {
    constructor(props){
        super(props);
        this.state = {score: 0};
        this.singleKill = this.singleKill.bind(this);
    }

singleKill(){
    /*
    This function adds 1 to score state.
    So, when it is clicked the "this.state.score" will be 
    incremented with one extra number. Always increasing 
    the score..
    */

    // Not a good idea
    this.setState({score: this.state.score + 1});
}
render(){

    return(
        <div>
            <h1>Score is: {this.state.score}</h1>
            <button onClick={this.singleKill}>Single Kill!</button>
        </div>
    )
}

}
export default ScoreKeeper;
import React, { Component } from 'react';

class ExperimentalWisdownSquare extends Component {
    static defaultProps = {
        messages: [
            "You can never plan the future by the past.",
            "He who has a why to live can bear almost any how.",
            "Take into account that great love and great achievements involve great risk."
        ]
    }

    dispenseWisdom = () => {
        let {messages} = this.props;
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

    render(){
        return(
            <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
                <section>
                🧙🏽
                </section>
            </div>
        )
    }
}

// So instead of using a constructor just an arrow function: function = () => {} will
//  solve this problem.... 
export default ExperimentalWisdownSquare;
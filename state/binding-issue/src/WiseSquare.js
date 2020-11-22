import React, { Component } from 'react';
import './WiseSquare.css';

class WiseSquare extends Component {
    staticProps = {
        messages: [
            "You can never plan the future by the past.",
            "He who has a why to live can bear almost any how.",
            "Take into account that great love and great achievements involve great risk."
        ]
    }

    dispenseWisdom(){
        let {messages} = this.props;
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

    render(){
        return(
            // Never .bind(this) within it is called. It will bring performance isssues. 
            <div className="WiseSquare" onMouseEnter={this.dispenseWisdom.bind(this)}>
                <section>
                🧙🏽
                </section>
            </div>
        )
    }
}

export default WiseSquare;
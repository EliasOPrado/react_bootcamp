import React, { Component } from 'react';
import './WiseSquare.css';

class WiseSquare extends Component {
    constructor(props){
        super(props);
        this.dispenseWisdom = this.dispenseWisdom.bind(this);
    }
    static defaultProps = {
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
            <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
                <section>
                🧙🏽
                </section>
            </div>
        )
    }
    // Never .bind(this) within it is called. It will bring performance isssues. 
    // XXX this is a wrong approach: onMouseEnter={this.dispenseWisdom.bind(this)}
    // OOO this is a good approach: onMouseEnter={() => this.dispenseWisdom()}
    /*
    THIS is the perfect approach: onMouseEnter={this.dispenseWisdom} 
    After .bind(this) within the constructor only once it will be fine to call the 
    function within components.
    */ 
}

export default WiseSquare;
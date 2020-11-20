import React, { Component } from 'react';
import Coin from './Coin';
import {choice} from './helpers';

class CoinContainer extends Component {
    static defaultProps = {
        // defines the coin sides
        coins: [
            {side: 'heads', imgSrc: "https://www.bullionbypost.ie/media/cache/da/c3/dac35eac469bb45fbb6bf7fa47bbccef.jpg"},
            { side: "tails", imgSrc: "https://www.bullionbypost.co.uk/media/cache-bbp/48/50/4850742b65fd9b67a51b7e841bbac9a5.jpg" }
        ]
    };
    constructor(props){
        super(props);
        this.state = {
            // the initial state of the coin.
            currCoin:null,
            nFlips:0,
            nHeads:0,
            nTails:0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        // check (choice) method in helpers.js.
        // the choice method will random the arr value.
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                // newCoin is declared above.
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                /* 
                will iterate into the coins arr then the object
                 and check if the side is head or tails
                */ 
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1:0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1:0),
            };
        });
    }

    handleClick(e){
        this.flipCoin();
    }

    render(){
        return(
            <div className="CoinContainer">
                <h3>Let's flip a coin</h3>

                {this.state.currCoin && <Coin info={this.state.currCoin} />}

                <button onClick={this.handleClick}>Flip me</button>
                
                <p>Out of {this.state.nFlips} flips, 
                there have been {this.state.nHeads} 
                heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}

export default CoinContainer;
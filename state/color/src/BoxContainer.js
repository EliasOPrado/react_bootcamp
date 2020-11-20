import React, {Component} from 'react';
import Box from './Box';
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBox: 18,
        allColors : ['purple', 'magenta', 'violet', 'pink']
    }
   render(){
    const boxes = Array.from({length: this.props.numBox}).map(() =>(
        <Box colors={this.props.allColors}/>
    ))
    return (
        <div className="BoxContainer">
            {boxes}
        </div>
    )
   }
}

export default BoxContainer;

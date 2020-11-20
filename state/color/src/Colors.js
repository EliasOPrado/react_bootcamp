import React, {Component} from 'react';
import Box from './Box';

class Colors extends Component {
    static dafaultProps = {
        numBox: 18,
        allColors :  ["purple", "magenta", "violet", "pink"]
    }
    

    render(){
        const boxes = Array.from({lenght: this.props.numBox}).map(() =>(
            // add box component here
            <Box colors={this.props.allColors} />
        ));
        return <div className='BoxContainer'>{boxes}</div>;
    }
}

export default Colors;

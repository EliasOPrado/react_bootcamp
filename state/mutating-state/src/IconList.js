import React, { Component } from 'react';

class IconList extends Component {
    static defaultProps = {
        options:  [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch"
        ]
    };

    constructor(props){
        super(props);
        // default state
        this.state = { icons: ["bone"]};
        // add function to constructor
        this.addIcon = this.addIcon.bind(this);
    };

    // addIcon(){
    //     // 1- get icon randonly from option's state
    //     let idx = Math.floor(Math.random() * this.props.options.length);
    //     // 2- add icon on props with a random value
    //     let newIcon = this.props.options[idx];
    //     // 3- goes inco constructor and get the icons value
    //     let icons = this.state.icons;
    //     // 4- adds the randonaised icon from props into state...
    //     icons.push(newIcon);
    //     // 5- adds the icons as this.state in constructor.
    //     this.state({icons:icons})
    // }

    addIcon(){
         // get icon randonly from option's state
         let idx = Math.floor(Math.random() * this.props.options.length);
         // add icon on props with a random value
         let newIcon = this.props.options[idx];
         this.setState({icons: [...this.state.icons, newIcon]});
    }
    render(){
        // add 
        const icons = this.state.icons.map( i => <i className= {`fas fa-${i}`} />);
        return (
            <div> 
                <h1>Icons:{icons}</h1>
                <button onClick={this.addIcon}>Add New Icon</button>
            </div>
        )
    }
}

export default IconList;
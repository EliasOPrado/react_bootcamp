import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
           username:'' 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        // gets the value from the form and sets to username

        // INSTEAD OF USING USERNAME YOU USE [evt.target.value]
        /*
        Since there are an attribut "name" passed as username,
        email and password the [] will be changed to the corresponding
        "name".
        */ 
       this.setState({username: evt.target.value}) 
    }

    handleSubmit(evt){
        alert(`You typed ${this.state.username}`);
        // IMPORTANT: Sets the input to be empty once submited.
        this.setState({username: ""});
        evt.preventDefault();
    }
    render(){
        return(
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;
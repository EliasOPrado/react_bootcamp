import React, { Component } from 'react'

 class ShoppingListForm extends Component {
     constructor(props){
         super(props);
         this.state = {
             name: '',
             qty: ''
         }
         this.handleChange = this.handleChange.bind(this);
     }

     handleChange(evt){
        // the name within the "evt.target.name" is the attribute not the "state"
         this.setState({[evt.target.name]: evt.target.value})
     }
    render() {
        return (
            <div>
                <form >
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <label htmlFor="qty">Quantity:</label>
                    <input 
                    type="text"
                    id="qty"
                    name="qty"
                    value={this.state.qty}
                    onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default ShoppingListForm;

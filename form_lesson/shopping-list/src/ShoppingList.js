import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import uuid from "uuid/v4";

class ShoppingList extends Component {
  // step 1 add a constructor 
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gallons", id: uuid() },
        { name: "Bread", qty: "2 loaves", id: uuid() }
      ]
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    let newItem = { ...item, id: uuid() };
    this.setState(state => ({
        // ... is set to all exisiting items
      items: [...state.items, newItem]
    }));
  }
  renderItems() {
    return (
      <ul>
        {/* 
            loop throght the items from state and 
            shows them in a list for each one.
        */}
        {this.state.items.map(item => (
          <li key={item.id}>
            {item.name}:{item.qty}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    // add the shopping list form to appear bellow the shopping list
    return (
      <div>
        <h1>Shopping List</h1>
        {/* here will appear the shopping list
            from renderList() function...
         */}
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}
export default ShoppingList;


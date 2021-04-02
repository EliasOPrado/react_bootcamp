import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }

  handlerUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlerCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handlerTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault()
};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handlerUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handlerCommentsChange}
          ></textarea>
        </div>
        <label value={this.state.topic} onChange={this.handlerTopicChange}>
          Topic
        </label>
        <select>
          <option value="react">react</option>
          <option value="angular">angular</option>
          <option value="vue">vue</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
  view;
}

export default Form;

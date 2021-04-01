import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    
        this.state = {
             message: 'hello'
        }
    }
    clickHandler() {
        this.setState({
            message: 'good bye'
        })
    }
    render() {
        return (
            <div>
            <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind

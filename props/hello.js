class Hello extends React.Component {
    render(){
    let bangs = "!".repeat(this.props.bangs);
    return (
    <div>
    <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
    <img src={this.props.img}/>
    </div>
    )
    }
}
// outcome: Hi Ringo from Paul

// props is a short for properties.
// props are immutable.
// props are for configuring your component.
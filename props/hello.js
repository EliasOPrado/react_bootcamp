class Hello extends React.Component {
    render(){
      
        return <p>Hi {this.props.to} from {this.props.from}</p>;
    }
}

// props is a short for properties

// outcome: Hi Ringo from Paul
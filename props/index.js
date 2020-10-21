class App extends React.Component {
    render(){
        return (
            <div>
     {/* this is the place where is added the components */}
            <Hello to="Ringo" from="Paul"/>
            <Hello to="Cher" from="Sonny"/>
            </div>
        )
    }
} 
// This class is the main one and will be added to the index.html
ReactDOM.render(<App/>, document.getElementById('root'))

// Object
// from: "Paul"
// to: "Ringo"

// the "to" and "from" are propreties..
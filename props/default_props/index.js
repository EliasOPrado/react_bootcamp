class App extends React.Component {
    render(){
        return (
            <div>
            <Hello 
            to="Ringo" 
            img="https://cdn.pixabay.com/photo/2014/06/11/15/46/graffiti-366829__480.jpg"
            />
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
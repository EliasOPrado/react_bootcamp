class App extends React.Component {
    render(){
        return (
            <div>
            <h1>Slot Machine</h1>
            <Machine
            s1="🍒"
            s2="🍒"
            s3="🍒"
            />
            <Machine
            s1="🍒"
            s2="🍇"
            s3="🍇"
            />
            <Machine
            s1="🍒"
            s2="🍋"
            s3="🍇"
            />
            </div>
        )
    }
} 
// This class is the main one and will be added to the index.html
ReactDOM.render(<App/>, document.getElementById('root'))
class App extends React.Component {
    render(){
        return (
            <div>
            <Friend 
            name="Elton"
            hobbies={['Piano', 'Singing', 'Dancing']}
            />
            <Friend 
            name="Ney"
            hobbies={['Gamming', 'Cycling', 'Footbal']}
            />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
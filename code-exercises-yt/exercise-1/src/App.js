import './App.css';
import Greet from './Greet'
import Message from './Message'

function App() {
  return (
    <div className="App">
      <Greet name='John' heroName='Flash'/>
      <Greet name='Peter'heroName='Batman' />
      <Message />
    </div>
  );
}

export default App;

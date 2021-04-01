import './App.css';
import Greet from './Greet'
import Message from './Message'
import Counter from './Counter'
import FunctionClick from './FunctionClick'
import EventBind from './EventBind'

function App() {
  return (
    <div className="App">{/*
      <Greet name='John' heroName='Flash'/>
      <Greet name='Peter'heroName='Batman' />
      <Message />
      <Counter />
      <FunctionClick />*/}
      <EventBind />
    </div>
  );
}

export default App;

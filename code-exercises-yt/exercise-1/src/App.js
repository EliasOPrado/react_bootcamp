import './App.css';
import Greet from './Greet'
import Message from './Message'
import Counter from './Counter'
import FunctionClick from './FunctionClick'
import EventBind from './EventBind'
import NameList from './NameList'
import StyleSheets from './StyleSheets'
import Form from './Form'

function App() {
  return (
    <div className="App">{/*
      <Greet name='John' heroName='Flash'/>
      <Greet name='Peter'heroName='Batman' />
      <Message />
      <Counter />
      <FunctionClick />
      <EventBind />
      <NameList />
      <StyleSheets primary={true} />*/}
      <Form />
    </div>
  );
}

export default App;

import './App.css';
import ClassCount from './components/ClassCount'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter4 from './components/HookCounter4'
import HookCounterOne from './components/HookCounterOne'

function App() {
  return (
    <div className="App">
      <ClassCount/>
      <HookCounter/>
      <HookCounter2/>
      <HookCounter4/>
      <HookCounterOne/>
    </div>
  );
}

export default App;

import './App.css';
import ClassCount from './components/ClassCount'
import HookCounter from './components/HookCounter'
import HookCounter2 from './components/HookCounter2'
import HookCounter4 from './components/HookCounter4'
import HookCounterOne from './components/HookCounterOne'
import HookMouse from './components/HookMouse'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching'

function App() {
  return (
    <div className="App">
     {/*<ClassCount/>
      <HookCounter/>
      <HookCounter2/>
      <HookCounter4/> 
      <HookCounterOne/> 
      <HookMouse />
      <IntervalHookCounter/>*/}
      <DataFetching/>
    </div>
  );
}

export default App;

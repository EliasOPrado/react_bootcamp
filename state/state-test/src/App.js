import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Game2 from './Game2';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';

function App() {
  return (
    <div className="App">
    <p>Hello there</p>
    <Game />
    <Game2 />
    <Rando maxNum={7}/>
    <BrokenClick />
    </div>
  );
}

export default App;

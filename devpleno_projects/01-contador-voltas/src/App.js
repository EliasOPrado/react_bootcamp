import React, {useState, useEffect} from 'react'
import './Style.css'
import MostrarVoltas from './MostrarVoltas'
import MostrarTempo from './MostrarTempo'
import Button from './Button'


function App() {

  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  useEffect(() => {
    let timer = null
    if(running){
    timer = setInterval(() => {
      setTempo(old => old + 1)
    }, 1000)
  }
  return () => {
    if(timer){
      clearInterval(timer)
    }
  }
    // the sqr bracket shows that the code doesnt have dependences.
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }
  
  const decrement = () => {
    if(numVoltas > 0){
    setNumVoltas(numVoltas - 1)
    }
  }

  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }
  return (
    <div>
      
    <MostrarVoltas voltas={numVoltas}/>

      
      <Button text = '+' onClick={increment}/>
      <Button text = '-' onClick={decrement}/>
      <br/><br/>
      {
        numVoltas > 0 &&
      <MostrarTempo tempo={Math.round(tempo / numVoltas)}/>
      }
      <Button onClick={toggleRunning} text = 'Iniciar' />
      <Button onClick={reset} text = 'Reiniciar' />
    </div>
  );
}

export default App;

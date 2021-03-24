
const MostrarVoltas = (props) => {
  return (
    <p>
    {props.voltas}
      <br/>
      Voltas
      </p>
  )
}

const MostrarTempo = (props) => {
  return (
    <p>
    {props.tempo}
      <br/>
      Tempo medio por volta
      </p>
  )
}

const Button = (props) => <button>{props.text}</button>

function App() {
  return (
    <div>
      
    <MostrarVoltas voltas='16'/>

      
      <Button text = '+' />
      <Button text = '-' />
      <br/><br/>

      <MostrarTempo tempo='01:35'/>

      <Button text = 'Iniciar' />
      <Button text = 'Reiniciar' />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'

import './App.css';

function App() {
const [posts, setPosts] = useState([])
const [load, setLoad] = useState('https://api.chucknorris.io/jokes/random')

const getPosts = async () => {
  const response = await fetch(load)
  const data = await response.json()

  console.log(data.value)
}

  return (
    <div className="App">
      <h1>Elias</h1>
    </div>
  );
}

export default App;

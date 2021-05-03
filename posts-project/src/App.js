import { useState, useEffect } from 'react'
import Posts from './Posts'

import './App.css';

function App() {
const [posts, setPosts] = useState([])
const [load, setLoad] = useState('https://api.chucknorris.io/jokes/random')
const [image, setImage] = useState('')

const getPosts = async () => {
  const response = await fetch(load)
  const data = await response.json()

  setPosts(data.value)
  setImage(data.icon_url)
}
useEffect(() => {
 getPosts()
  
}, [])
  return (
    <div className="App">
      
      <Posts image={image} post={posts} />

      <button onClick={() => getPosts()}> Load More </button>
    </div>
  );
}

export default App;

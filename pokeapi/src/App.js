import React, { useState, useEffect } from 'react'

function App() {

  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    // set the  loadmore the data.next from response
    setLoadMore(data.next)
    
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="app-container">
      <h1>Pokemon</h1>
      <div className="pokemon-container">
        <div className="all-container">
        
        </div>
        <button className='load-more'>Load more</button>
      </div>
    </div>
  );
}

export default App;

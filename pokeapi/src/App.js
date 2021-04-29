import React, { useState, useEffect } from 'react'
import PokemonThumbnail from './components/PokemonThumbnail'

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    // set the  loadmore the data.next from response
    setLoadMore(data.next)

    // add a nested function into request 
    // to get the NEXT URL from the previous fetched
    // and make another request
    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        // fetch the data and add to "allPokemons"
        setAllPokemons( currentList => [...currentList, data])
        //await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)

    await console.log(allPokemons)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="app-container">
      <h1>Pokemon</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {
            allPokemons.map((pokemon, index) => 
              <PokemonThumbnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}

              key={index}
              />  
            )
          }
        </div>
        <button className='load-more' onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
  );
}

export default App;

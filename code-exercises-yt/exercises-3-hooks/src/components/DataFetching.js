import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  // Usar o useEffect para pegar os dados
  useEffect(() => {
    // Download do axios para fazer o fetch e usar id state para adicionar os dados
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      // O then tem o poder de mostrar os dados e fazer o fetch usando o setPost
      .then((response) => {
        console.log("RESPONSE!!!", response);
        setPost(response.data);
      })
      // O catch mostra os erros
      .catch((error) => console.log("AQUIII", error));
      // esse arr block demonstra qual state sera baseado o lifecycle.
  }, [idFromButtonClick]);

  const handleClick = () => {
    // This state is based on id state 
    setIdFromButtonClick(id)
  }

  // This part post and id is used to get the values from data fetched from useEffect
  return (
    <div>
      <br />
      <div>{post.name}</div>
      <div>{post.base_experience}</div>
      <img src="{post.location_area_encounters}" alt=""/>
      <br />
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <button type='buton' onClick={handleClick}>Fetch Post</button>
      {/*<ul>
            
                posts.map(post =>
                   <li key={post.id}>{post.title}</li> 
                )
                
           </ul>*/}
    </div>
  );
}

export default DataFetching;

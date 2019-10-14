import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CharacterList = () => {
  const [characters, addCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((response) => addCharacters(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {console.log(characters)}
    </section>
  );
};

export default CharacterList;

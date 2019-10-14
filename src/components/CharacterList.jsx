import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { CardColumns } from 'reactstrap';
import CharacterCard from './CharacterCard';


const CharacterList = ({ query }) => {
  const [characters, addCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((response) => addCharacters(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="character-list">
      <CardColumns className="p-4">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </CardColumns>
    </section>
  );
};

CharacterList.propTypes = {
  query: PropTypes.string.isRequired,
};

export default CharacterList;

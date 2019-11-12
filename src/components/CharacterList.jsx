import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { CardColumns } from 'reactstrap';
import CharacterCard from './CharacterCard';


const CharacterList = ({ query }) => {
  const [characters, addCharacters] = useState([]);
  const [searchedCharacters, addSearchedCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((response) => addCharacters(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let matched = false;

    if (query) {
      const queriedCharacters = [];
      characters.map((character) => {
        if (Object.values(character)
          .includes(query)) {
          matched = true;
          queriedCharacters.push(character);
        }
      });

      if (matched === true) {
        addSearchedCharacters(queriedCharacters);
      } else {
        alert('No characters matched your search.');
      }
    } else {
      addSearchedCharacters([]);
    }
  }, [characters, query]);

  return (
    <section className="character-list">
      <CardColumns className="p-4">
        {searchedCharacters.length > 0 ? searchedCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        )) : characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </CardColumns>
    </section>
  );
};

CharacterList.propTypes = {
  query: PropTypes.string,
};

CharacterList.defaultProps = {
  query: '',
};

export default CharacterList;

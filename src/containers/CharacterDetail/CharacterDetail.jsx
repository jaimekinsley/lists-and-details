import React from 'react';
import { useState, useEffect } from 'react';
import { getCharacterById } from '../../services/getCharacters';


const CharacterDetail = ({ match }) => {
  const [character, setCharacter] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCharacterById(match.params.id)
      .then((character) => {
        setCharacter(character);
      })
      .finally(() => setLoading(false));
  }, []);
  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <p>{character.name}</p>
      <img src={character.image} />
    </>
  );
};

export default CharacterDetail;


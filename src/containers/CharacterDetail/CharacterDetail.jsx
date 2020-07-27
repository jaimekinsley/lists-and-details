import React from 'react';
import { useState, useEffect } from 'react';
import { getCharacterById } from '../../services/getCharacters';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';

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
      <Link to={'/'}>
        <button>Back to List</button>
      </Link>
    </>
  );
};

CharacterDetail.propTypes = {
  match: PropTypes.object.isRequired
};

export default CharacterDetail;


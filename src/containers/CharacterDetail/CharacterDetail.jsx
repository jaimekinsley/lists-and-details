import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCharacterDetail } from './CharacterDetailHook';

const CharacterDetail = ({ match }) => {
  // replace functional component logic here

  const { character,
    loading
  } = useCharacterDetail(match.params.id);

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

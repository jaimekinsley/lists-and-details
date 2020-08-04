import React from 'react';
import PropTypes from 'prop-types';
import Character from '../Character/Character';
import { Link } from 'react-router-dom';

const Characters = ({ characters }) => {
  const characterElements = characters.map(character => (
    <Link to={`/${character._id}`} key={character.name}>
      <li key={character.name}>
        <Character {...character} />
      </li>
    </Link>
  ));

  return (
    <>
      <ul>
        {characterElements}
      </ul>
    </>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;

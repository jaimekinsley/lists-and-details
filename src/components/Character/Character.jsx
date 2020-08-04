import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name }) => (
  <p>{name}</p>
);

Character.propTypes = {
  name: PropTypes.string.isRequired
};

export default Character;

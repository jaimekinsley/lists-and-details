import React from 'react';
import { useState, useEffect } from 'react';
import { getCharacters } from '../../services/getCharacters';
import Characters from '../../components/Characters/Characters';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCharacters()
      .then((characters) => {
        setCharacters(characters);
      })
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <Characters characters={characters} />
  );
};

export default Home;

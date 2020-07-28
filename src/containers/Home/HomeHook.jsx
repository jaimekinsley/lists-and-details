import { useState, useEffect } from 'react';
import { getCharacters } from '../../services/getCharacters';

export const useHome = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters()
      .then((characters) => {
        setCharacters(characters);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    characters,
    loading
  };
};

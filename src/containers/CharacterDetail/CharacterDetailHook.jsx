import { useState, useEffect } from 'react';
import { getCharacterById } from '../../services/getCharacters';

export const useCharacterDetail = (id) => {
  const [character, setCharacter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacterById(id)
      .then((character) => {
        setCharacter(character);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    character,
    loading
  };
};

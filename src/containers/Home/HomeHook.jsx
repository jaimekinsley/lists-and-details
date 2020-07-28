import { useState } from 'react';

export const useHome = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  return {
    characters, loading
  };
};

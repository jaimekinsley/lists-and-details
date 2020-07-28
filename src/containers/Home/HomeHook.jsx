import { useState, useEffect } from 'react';
import { getCharacters } from '../../services/getCharacters';

export const useHome = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const handlePageChange = ({ target }) => {
    if(target.name === 'Next') setPage(page => page + 1);
  };

  useEffect(() => {
    getCharacters(page)
      .then((characters) => {
        setCharacters(characters);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return {
    characters,
    loading,
    page,
    handlePageChange
  };
};

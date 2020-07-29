import { useState, useEffect } from 'react';
import { getCharacters, getNextPage } from '../../services/getCharacters';

export const useHome = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [direction, setDirection] = useState('');
  const [lastPage, setLastPage] = useState(false);

  const handlePageChange = ({ target }) => {
    if(target.name === 'next') setPage(page => page + 1);
    if(target.name === 'previous' && page > 1) setPage(page => page - 1);
    setDirection(target.name);
  };

  useEffect(() => {
    getCharacters(page)
      .then((characters) => {
        setCharacters(characters);
        return getNextPage(page);
      })
      .then((characters) => {
        setLastPage(characters.length === 0);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return {
    characters,
    loading,
    page,
    handlePageChange,
    lastPage,
    direction
  };
};

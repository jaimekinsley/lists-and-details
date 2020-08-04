import React from 'react';
import Characters from '../../components/Characters/Characters';
import { useHome } from './HomeHook';

const Home = () => {
  // replaced functional component logic with custom hook here
  const {
    characters,
    loading,
    page,
    handlePageChange,
    lastPage
  } = useHome();

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      { page > 1 &&
        <button name="previous" onClick={handlePageChange}>Previous</button> }

      { lastPage === false &&  <button name="next" onClick={handlePageChange} >Next</button> }

      <Characters characters={characters} />
    </>
  );
};

export default Home;

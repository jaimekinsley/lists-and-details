import React from 'react';
import Characters from '../../components/Characters/Characters';
import { useHome } from './HomeHook';

const Home = () => {
  // replaced functional component logic with custom hook here
  const {
    characters,
    loading,
    handlePageChange
  } = useHome();

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <button>Previous</button>
      <button name="Next" onClick={handlePageChange} >Next</button>

      <Characters characters={characters} />
    </>
  );
};

export default Home;

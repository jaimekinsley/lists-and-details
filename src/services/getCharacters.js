export const getCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters', {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};

export const getCharacters = (page) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?page=${page}`, {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};

export const getNextPage = (page) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?page=${page + 1}`, {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};

export const getCharacterById = (id) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`, {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};

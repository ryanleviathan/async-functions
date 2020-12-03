const fetch = require('node-fetch');

async function getCharacter(id) {
  try {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(({
      name,
      status,
      species
    }) => ({
      name: name,
      status: status,
      species: species
      }))
  } catch(err) {
  }
}

const getManyCharacters = ids => {
  return Promise.all(ids.map(id => getCharacter(id)))
}

module.exports = {
  getManyCharacters
};

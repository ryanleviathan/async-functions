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

module.exports = {
  getCharacter
};
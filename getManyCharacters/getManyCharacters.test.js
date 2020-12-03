const { getManyCharacters } = require('./getManyCharacters.js');
const fetch = require('node-fetch');

describe('return name/status/species by id (passing as many ids in array) from the Rick and Morty API', () => {
  it('does it', async () => {
    const characters = await getManyCharacters([1, 2, 3])

      expect(characters).toEqual([
        { name: "Rick Sanchez", status: "Alive", species: "Human" },
        { name: "Morty Smith", status: "Alive", species: "Human" },
        { name: "Summer Smith", status: "Alive", species: "Human" }
      ])
  });
})

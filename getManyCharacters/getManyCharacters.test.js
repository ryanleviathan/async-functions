const { getManyCharacters } = require('./getManyCharacters.js');
const fetch = require('node-fetch');
const mockRes = require('./mock-res.json')

jest.mock('node-fetch')

describe('return name/status/species by id (passing as many ids in array) from the Rick and Morty API', () => {
  it('does it', async () => {
    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockRes)
  });
   
    const characters = await getManyCharacters([2, 3, 4])
    console.log(characters)

      expect(characters).toEqual([
        { name: "Morty Smith", status: "Alive", species: "Human" },
        { name: "Morty Smith", status: "Alive", species: "Human" },
        { name: "Morty Smith", status: "Alive", species: "Human" }
      ])
  });
})

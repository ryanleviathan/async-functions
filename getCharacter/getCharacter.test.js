const { getCharacter } = require('./getCharacter.js');
const fetch = require('node-fetch');

describe('return name/status/species by id from the Rick and Morty API', () => {
  it('does it', async () => {
    const rick = ({
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human"
    })
    paramId = 1
    return getCharacter(paramId)
    .then(output => {
      expect(output).toEqual(rick)
    });
  })
})
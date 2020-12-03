const fs = require('fs').promises
const copy = require('./copy.js')

describe('copier function', () => {
  afterEach(() => {
    return fs.rm('./copy/copied-file.txt')
  })

  it('reads a file and creates a copy with a new name within the same folder', async() => {
    
    return copy('./copy/file-to-be-copied.txt', './copy/copied-file.txt')
    .then(() => {
      return fs.readFile('./copy/copied-file.txt', 'utf-8')
    })
    .then(
      test => {
        expect(test).toEqual('I will be copying this for practice.')
      }
    )
  })
})

const fs = require('fs').promises
const transform = require('./transform.js')

describe('sting transform function', () => {

  it('reads a file, removes upercase letters, then makes all letters uppercase, then reverses string', async() => {
    
    return await transform('./transform/transform-me.txt')
    .then( transformed => {
      expect(transformed).toEqual('.MROFSNART EB W I')
    }
    )
    }
  )
})

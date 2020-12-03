const fs = require('fs').promises

async function transform(src) {
    try {
      const regex = /[A-Z]/g
      return await fs.readFile(src, 'utf-8')
      .then(data => data.replace(regex, ''))
      .then(data => data.toUpperCase())
      .then(data => data.split('').reverse().join(''))
    } catch(err) {
      console.log(err)
  }
}

// async function transform(src) {
//     try {
//       const redString = await fs.readFile(src, 'utf-8')
//       const replacedString = redString.replace(/[A-Z]/g, '')
//       const upperCasedString = replacedString.toUpperCase()
//       const reversedString = upperCasedString.split('').reverse().join('')

//       return reversedString
//     } catch(err) {
//       console.log(err)
//   }
// }

module.exports = transform
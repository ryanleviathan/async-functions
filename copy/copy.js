const fs = require('fs').promises

async function copy(src, path) {
  try {
    const data = await fs.readFile(src, 'utf-8')
    await fs.writeFile(path, data)
  } catch(err) {
    console.log(err)
  }
}

module.exports = copy

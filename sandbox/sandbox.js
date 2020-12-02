const fs = require('fs').promises

const newFile = './sandbox/new-file.txt'
const newerFile = './sandbox/newer-file.txt'

async function writer() {
  try {
    const data = await fs.writeFile(newFile, 'Look at this new file! I wrote it and everything.')
  } catch(err) {
    console.log(err)
  }
}

writer()

async function reader() {
  try {
    const data = await fs.readFile(newFile, 'utf-8')
    console.log(data)
  } catch(err) {
    console.log(err)
  }
}

reader()

async function copier() {
  await fs.copyFile(newFile, newerFile, 0, err => {
      if (err) throw err;
      console.log('new-file.txt copied to newer-file.txt')
  })
}

copier()
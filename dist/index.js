const fs = require('fs/promises')

async function run() {
  try {
    console.log('Node version')
    console.log(process.versions)

    console.log('stat file')
    console.log(await fs.stat('🍔🕵️😒.txt'))
  } catch (error) {
    console.log("error!")
  }
}

run()
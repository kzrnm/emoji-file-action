const fs = require('fs/promises')

async function run() {
  try {
    await fs.writeFile('🍔🕵️😒.txt', "🦖")
  } catch (error) {
    console.log("error!")
  }
}

run()
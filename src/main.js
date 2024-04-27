const core = require('@actions/core')
const fs = require('fs/promises')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const filePath = core.getInput('file', { required: true })

    console.log('Node version')
    console.log(process.versions)

    console.log('read file')
    console.log(await fs.readFile(filePath))
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}

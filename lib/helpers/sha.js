const { pathIsRequiredMessage } = require('./shared')

function shellExecute (command) {
  const { exec } = require('shelljs')

  return exec(command).stdout
}

function sha (pathToFile) {
  if (pathToFile === undefined) return pathIsRequiredMessage()

  return shellExecute(shaCommand(pathToFile))
}

function shaCommand (path) {
  return `git log --pretty=format:'%H' -n 1 ${path}`
}

module.exports = { sha }

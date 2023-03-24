const { pathIsRequiredMessage } = require('./shared')

function sha (pathToFile) {
  if (pathToFile === undefined) return pathIsRequiredMessage()

  return shellExecute(gitLogCommand(pathToFile))
}

function shellExecute (command) {
  const { exec } = require('shelljs')

  return exec(command, { silent: true }).stdout
}

function gitLogCommand (path) {
  return `git log --pretty=format:'%H' -n 1 ${path}`
}

module.exports = { sha }

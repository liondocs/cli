function commandNotFoundMessage () {
  return `
    Command Not Found, Verify Available Commands Running:
    liondocs --help
  `
}

function helpMessage () {
  return `
    liondocs [command] [params]

    -----------------------------------------------------------------------
    | Command          | Arguments        | Description                    |
    -----------------------------------------------------------------------
    | --sha or -s      | path/to/the/file | Display the sha of given file  |
    ------------------------------------------------------------------------
    | --version or -v  |                  | Display available commands     |
    ------------------------------------------------------------------------
    | --help or -h     |                  | Display available commands     |
    ------------------------------------------------------------------------
  `
}

function pathIsRequiredMessage () {
  return 'path is required'
}

function pkgInfo () {
  const file = require('../../package.json')

  return file
}

function versionMessage () {
  return `v${pkgInfo().version}`
}

module.exports = {
  commandNotFoundMessage,
  helpMessage,
  pathIsRequiredMessage,
  pkgInfo,
  versionMessage
}

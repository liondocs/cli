function pathIsRequiredMessage () {
  return 'path is required'
}

function commandNotFoundMessage () {
  return `
    Command Not Found, Verify Available Commands Running:
    liondocs --help
  `
}

function helpMessage () {
  return `
    liondocs [command] [params]

    --------------------------------------------------------------------
    | Command       | Arguments        | Description                   |
    --------------------------------------------------------------------
    | --sha or -s   | path/to/the/file | Display the sha of given file |
    --------------------------------------------------------------------
    | --help or -h  |                  | Display available commands    |
    --------------------------------------------------------------------
  `
}

module.exports = {
  commandNotFoundMessage,
  helpMessage,
  pathIsRequiredMessage
}

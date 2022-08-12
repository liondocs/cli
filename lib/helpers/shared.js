function pathIsRequiredMessage () {
  return 'path is required'
}

function commandNotFoundMessage () {
  return `
    Command Not Found, Verify Available Commands Running:
    source_commit --help
  `
}

function helpMessage () {
  return `
    source_commit [command] [params]

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

function pathIsRequiredMessage() {
  return `path is required`
}

function commandNotFound() {
  return `
    Command Not Found, Verify Available Commands Running:
    source_commit --help
  `
}

function help() {
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
  commandNotFound,
  help,
  pathIsRequiredMessage
}

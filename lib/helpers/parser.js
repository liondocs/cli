const { helpMessage, commandNotFoundMessage, versionMessage } = require('./shared')

function parser (args) {
  const action = args[2]

  switch (action) {
    case '--copy':
      return { command: 'copy', payload: args[3] }
    case '-s':
    case '--sha':
      return { command: 'sha', payload: args[3] }
    case '-v':
    case '--version':
      return { command: 'version', payload: versionMessage() }
    case '-h':
    case '--help':
      return { command: 'help', payload: helpMessage() }
    default:
      return { command: 'undefined', payload: commandNotFoundMessage() }
  }
}

module.exports = { parser }

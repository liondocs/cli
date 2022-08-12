const { helpMessage, commandNotFoundMessage } = require('./shared')

function parser (args) {
  const action = args[2]

  switch (action) {
    case '-s':
    case '--sha':
      return { command: 'sha', payload: args[3] }
    case '-h':
    case '--help':
      return { command: 'help', payload: helpMessage() }
    default:
      return { command: 'undefined', payload: commandNotFoundMessage() }
  }
}

module.exports = { parser }

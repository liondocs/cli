const { sha } = require('./sha')
const { copy, fromPath, toPath } = require('./copy')

function executor (object) {
  switch (object.command) {
    case 'copy':
      return copy({ from: fromPath(), to: toPath(), file: object.payload })
    case 'sha':
      return sha(object.payload)
    case 'help':
    case 'undefined':
    case 'version':
      return object.payload
    default:
      throw new Error("command doesn't exist")
  }
}

module.exports = { executor }

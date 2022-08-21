const { sha } = require('./sha')

function executor (object) {
  switch (object.command) {
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

const {sha} = require("./sha")

function executor(object) {
  switch (object["command"]) {
    case "sha":
      return sha(object["payload"])
    case "undefined":
    case "help":
      return object["payload"]
    default:
      throw "command doesn't exist"
  }
}

module.exports = {executor}

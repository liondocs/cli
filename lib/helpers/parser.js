const {helpMessage, commandNotFoundMessage} = require("./shared")

function parser(args) {
  const action = args[2]

  switch (action) {
    case "-s":
    case "--sha":
      const pathToFile = args[3]
      return {command: "sha", payload: pathToFile}
    case "-h":
    case "--help":
      return {command: "help", payload: helpMessage()}
    default:
      return {command: "undefined", payload: commandNotFoundMessage()}
  }
}

module.exports = {parser}

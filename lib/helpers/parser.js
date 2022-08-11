const {help, commandNotFound} = require("./shared")

function parser(args) {
  const action = args[2]

  switch (action) {
    case "-s":
    case "--sha":
      const pathToFile = args[3]
      return {command: "sha", payload: pathToFile}
    case "-h":
    case "--help":
      return {command: "help", payload: help()}
    default:
      return {command: "undefined", payload: commandNotFound()}
  }
}

module.exports = {parser}

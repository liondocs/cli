function parser(args) {
  console.log(args);
  const action = args[2]

  switch (action) {
    case "-s":
    case "--show":
      const from = args[4]
      return {command: "show", from}
    case "-c":
    case "--config":
      return {command: "config"}
    default:
      return {command: "help"}
  }
}

module.exports = {parser}

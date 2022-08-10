#! /usr/bin/env node

const {parser} = require("../lib/index")
const command = parser(process.argv)
console.log(command);

// let shell = require("shelljs")
// let args  = process.argv.slice(2)
//
// let fromKey = args[0]
// let fromValue = args[1]
//
// // --from or -f key is required
// if (!["--from", "-f"].includes(fromKey)) {
//   shell.echo("--from key is required: source_commit --from /path/to/file")
//   shell.exit(1)
// }
//
// // value of --from is required
// if (fromValue === undefined) {
//   shell.echo("--from value is required: source_commit --from /path/to/file")
//   shell.exit(1)
// }
//
// let sha = shell.exec("git log --pretty=format:'%H' -n 1 " + fromValue)
// shell.echo(sha)

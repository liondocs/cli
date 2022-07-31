#! /usr/bin/env node

let shell = require("shelljs")

let pwd = shell.exec("pwd")

if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git")
  shell.exit(1)
}

let sha = shell.exec("git log --pretty=format:'%H' -n 1 " + pwd.stdout)

shell.echo(sha)

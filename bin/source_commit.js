#! /usr/bin/env node

const {parser, executor} = require("../lib/index")
const command = parser(process.argv)

console.log(executor(command));


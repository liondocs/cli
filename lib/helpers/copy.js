function fromPath (file) {
  return process.cwd()
}

function toPath () {
  return '/home/itox/code/projects/tests/es'
}

function copy ({ from, to, file }) {
  const fs = require('fs')
  const a = from + '/' + file
  const b = to + '/' + file
  console.log(a, b)
  fs.cp(a, b, function (err, a) {
    if (err) return err
  })
}

module.exports = { copy, fromPath, toPath }

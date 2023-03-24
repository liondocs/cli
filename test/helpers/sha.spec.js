const { pathIsRequiredMessage } = require('../../lib/helpers/shared')
const { sha } = require('../../lib/helpers/sha')
const { exec } = require('shelljs')

describe('sha', () => {
  it('returns an error message', () => {
    const pathToFile = undefined
    expect(sha(pathToFile)).toEqual(pathIsRequiredMessage())
  })

  it('returns the last file SHA', () => {
    const pathToFile = `${process.cwd()}/test/fixtures/test.txt`
    const gitLogCommand = `git log --pretty=format:'%H' -n 1 ${pathToFile}`
    const expectedSha = exec(gitLogCommand, { silent: true }).stdout

    expect(sha(pathToFile)).toEqual(expectedSha)
  })
})

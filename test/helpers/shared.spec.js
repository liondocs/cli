const {
  commandNotFoundMessage,
  helpMessage,
  pathIsRequiredMessage,
  versionMessage
} = require('../../lib/helpers/shared')

describe('commandNotFoundMessage', () => {
  it('returns a message', () => {
    const expected = `
    Command Not Found, Verify Available Commands Running:
    liondocs --help
  `

    expect(commandNotFoundMessage()).toEqual(expected)
  })
})

describe('helpMessage', () => {
  it('returns a message', () => {
    const expected = `
    liondocs [command] [params]

    -----------------------------------------------------------------------
    | Command          | Arguments        | Description                    |
    -----------------------------------------------------------------------
    | --sha or -s      | path/to/the/file | Display the sha of given file  |
    ------------------------------------------------------------------------
    | --version or -v  |                  | Display available commands     |
    ------------------------------------------------------------------------
    | --help or -h     |                  | Display available commands     |
    ------------------------------------------------------------------------
  `

    expect(helpMessage()).toEqual(expected)
  })
})

describe('pathIsRequiredMessage', () => {
  it('returns a message', () => {
    expect(pathIsRequiredMessage()).toEqual('path is required')
  })
})

describe('versionMessage', () => {
  it('returns the package.json version', () => {
    const file = require('../../package.json')

    expect(versionMessage()).toEqual(`v${file.version}`)
  })
})

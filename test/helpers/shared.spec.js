const {
  commandNotFoundMessage,
  helpMessage,
  pathIsRequiredMessage
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

    --------------------------------------------------------------------
    | Command       | Arguments        | Description                   |
    --------------------------------------------------------------------
    | --sha or -s   | path/to/the/file | Display the sha of given file |
    --------------------------------------------------------------------
    | --help or -h  |                  | Display available commands    |
    --------------------------------------------------------------------
  `

    expect(helpMessage()).toEqual(expected)
  })
})

describe('pathIsRequiredMessage', () => {
  it('returns a message', () => {
    expect(pathIsRequiredMessage()).toEqual('path is required')
  })
})

const { parser } = require('../../lib/helpers/parser')
const { helpMessage, commandNotFoundMessage } = require('../../lib/helpers/shared')

describe('parser', () => {
  let args = []
  beforeEach(() => {
    args = [
      '/path/to/node',
      '/bin/liondocs.js'
    ]
  })

  it('when action is --sha returns sha command', () => {
    args[2] = '--sha'
    args[3] = '/path/to/foo.md'
    const command = { command: 'sha', payload: '/path/to/foo.md' }

    expect(parser(args)).toEqual(command)
  })

  it('when action is -s returns sha command', () => {
    args[2] = '-s'
    args[3] = '/path/to/bar.md'
    const command = { command: 'sha', payload: '/path/to/bar.md' }

    expect(parser(args)).toEqual(command)
  })

  it('when action is --help returns help command', () => {
    args[2] = '--help'
    const command = { command: 'help', payload: helpMessage() }

    expect(parser(args)).toEqual(command)
  })

  it('when action is -h returns help command', () => {
    args[2] = '-h'
    const command = { command: 'help', payload: helpMessage() }

    expect(parser(args)).toEqual(command)
  })

  it('when actions is unknown returns default command', () => {
    const command = { command: 'undefined', payload: commandNotFoundMessage() }

    expect(parser(args)).toEqual(command)
  })
})

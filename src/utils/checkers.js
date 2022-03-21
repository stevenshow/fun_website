const commands = require('./commands')

export const validateCommand = (command, userParam) => {
  let valid = false
  if (command === 'color') {
    valid = commands.Commands.color.parameters.includes(...userParam)
  }
  if (command === 'cd') {
    valid = commands.Commands.cd.parameters.includes(...userParam)
  }
  if (command === 'linkedin') {
    valid = commands.Commands.linkedin.parameters.includes(...userParam)
  }
  return valid
}

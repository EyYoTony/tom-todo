// const args = process.argv.splice(2)
// const cmd = args[0]
// const rest = args.slice(1)
const [a, b, cmd, ...rest] = process.argv
// commands
const help = require('./cmds/help')
const add = require('./cmds/add')
const ls = require('./cmds/ls')
const rm = require('./cmds/rm')
const check = require('./cmds/check')

function handler(cmd) {
  switch(cmd.toLowerCase()) {
    case 'help':
      return help()
    case 'add':
      return add()
    case 'ls':
      return ls()
    case 'rm':
      return rm()
    case 'check':
      return check()
    default:
      return 'Welcome to my todo app'
  }
}

console.log(
  handler(cmd)
)

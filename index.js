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
const edit = require('./cmds/edit')
const {slice} = require('ramda')


function handler(cmd) {
  switch(cmd.toLowerCase()) {
    case 'help':
      return help()
    case 'add':
      return add(rest)
    case 'ls':
      return ls()
    case 'rm':
      return rm(rest[0])
    case 'check':
      return check(rest[0])
    case 'edit':
      return (edit(rest[0],slice(1,Infinity,rest).join(' ')))
    default:
      return 'Welcome to my todo app'
  }
}

console.log(
  handler(cmd)
)

const {get, set} = require('../lib/store')
const {map, filter, reduce} = require('ramda')
module.exports = function(){
  const todoList = get()
  console.log(`\n        TODO List`)
  console.log(`-----------------------`)
  map(printObj, todoList)
  console.log(`-----------------------`)
  console.log(`${countComplete(todoList)} finished   ${todoList.length} total`)

  return `${countComplete(todoList) / todoList.length * 100}% complete.`
}

function countComplete(list){
  return filter(isComplete, list).length
}

function isComplete(v){
  return v.completed === true
}

function printObj(v){
  console.log(`[${isComplete(v) ? "X" : " "}] - ${v.id} ${v.text}`)
  return v
}

const { get, set } = require('../lib/store.js')
const ls = require('./ls')

const { filter, curry, when, map } = require('ramda')

module.exports = function(id){
const list = get()
trace(map(x => when(checkId(id, x), x.completed = !x.completed),list))
ls()
}

function  checkId(idIn, obj) {
return obj.id  == idIn
}

function flipCompleted(obj) {
  return !obj.completed
}

const trace = function (v){
console.log(v)
return v
}

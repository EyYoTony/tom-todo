const { get, set } = require('../lib/store.js')
const ls = require('./ls')

const { filter, map } = require('ramda')

module.exports = function(id){
  const list = get()
  set(map(x => changeObj(id,x), list))
  return ls()
}

function changeObj(id, obj){
  if(checkId(id,obj)){
    return flipCompleted(obj)
  }
  else{
    return obj
  }
}

function  checkId(idIn, obj) {
  return obj.id  == idIn
}

function flipCompleted(obj) {
  obj.completed = !obj.completed
  return obj
}

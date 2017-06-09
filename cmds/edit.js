const {get, set} = require('../lib/store.js')
const {map} = require('ramda')
const ls = require('./ls')

module.exports = function(id,text){
  const list = get()
  set(map(x => changeToDo(id,x,text), list))
  return ls()
}




function  findId(idIn, obj) {
  return obj.id  == idIn
}

function changeToDo(id, obj, text){
  if(findId(id,obj)){
    return updateToDo(obj,text)
  }
  else{
    return obj
  }
}
function updateToDo(obj,text){
  obj.text = text
  return obj

}

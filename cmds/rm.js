const { get, set } = require('../lib/store.js')
const ls = require('./ls')
const { filter, curry, mapAccum } = require('ramda')

module.exports = function(id){
  const list = get()
  set(mapAccum(reducer, 1, filter(x => !isId(id,x),list))[1])
  ls()
}


function  isId(idIn, obj) {
  return obj.id  == idIn
}

 function reducer(acc, value){
   value.id = acc
   acc += 1
   return [acc,value]
}

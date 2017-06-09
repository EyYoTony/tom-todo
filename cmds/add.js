const {get, set} = require('../lib/store.js')
const ls = require('./ls')
module.exports = function(theRest){
  const list = get()
  set([...list, createObj(theRest)])
  return ls()
}

function createObj(v){
  var newObj = {
  text: v.join(" "),
  complete: false,
  id: get().length +1
  }
  return newObj
}

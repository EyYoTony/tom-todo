const { get, set } = require('../lib/store.js')
const ls = require('./ls')
const { filter, curry } = require('ramda')

module.exports = function(id){
const list = get()
set(filter(x => !isId(id,x),list))
ls()
}

function  isId(idIn, obj) {
return obj.id  == idIn
}

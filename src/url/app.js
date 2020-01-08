const url = require('url')
let api = "http://127.0.0.1?a=1&b=2"

let temp = url.parse(api,true).query
console.log(temp);
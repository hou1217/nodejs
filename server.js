let http = require('http')
http.createServer((req,res)=>{
  res.end('hello\n')
}).listen(8888)
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
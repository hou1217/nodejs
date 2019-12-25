let http = require('http')
let server = http.createServer()
server.on('request',(req,res)=>{
  console.log(req.method);
  res.write('hello\n');
  res.end();
})
server.listen(8888,()=>{
  // 终端打印如下信息
  console.log('Server running at http://127.0.0.1:8888/');
}) // 0-65535

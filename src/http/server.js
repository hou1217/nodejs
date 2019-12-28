const http = require('http')
const fs = require('fs')

const server = http.createServer()
server.on('request',(req,res)=>{
  console.log(req.method);
  console.log(req.url);
  if(req.url == '/'){
    res.write('hello\n');
    res.end();
  }else{
    fs.readFile('.'+req.url,(err,data)=>{
      if(err) throw err;
      res.end(data);
    })
  }
})
server.listen(8888,()=>{
  // 终端打印如下信息
  console.log('Server running at http://127.0.0.1:8888/');
}) // 0-65535

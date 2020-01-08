const http = require('http')//http模块
const fs = require('fs')//fs模块
const path = require('path')//path模块
const mimeModel = require('./modules/getmime')

const server = http.createServer((req,res)=>{
  console.log(req.method);
  let pathname = req.url;
  let extname = path.extname(pathname);
  console.log(pathname);
  if(pathname == '/'){
    pathname = '/index.html'
  }
  if(pathname != '/favicon.ico'){
    fs.readFile('./static' + pathname,(err,data)=>{
      if(err) {
        console.error('404');
        fs.readFile('./static/404.html',(err,data)=>{
          res.writeHead(404,{
            "Content-Type": "text/html;charset='utf-8'"
          });
          res.write(data);
          res.end();
        })
      }else{
        let mime = mimeModel.getMime(extname)
        res.writeHead(200,{
          "Content-Type": mime+";charset='utf-8'"
        });
        res.write(data);
        res.end();
      }
    })
  }
})
server.listen(8888,()=>{
  // 终端打印如下信息
  console.log('Server running at http://127.0.0.1:8888/');
}) // 0-65535

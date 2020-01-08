const fs = require('fs')
let path = './upload'
// 检测目录存不存在
fs.stat(path,(err,data)=>{
  if(err){
    // 创建目录
    mkdir(path);
    return;
  }
  if(data.isDirectory()){
    console.log('目录存在');
  }else{
    // 创建目录
    mkdir(path); 
  }
})
// 创建目录的方法
function mkdir(dir){
  fs.mkdir(dir,(err)=>{
    if(err){
      console.log(err);
      return;
    }
  })
}
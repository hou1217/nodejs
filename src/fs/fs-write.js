// 引入fs核心模块
const fs = require('fs')
let data = ",everyone"
fs.readFile('output.txt','utf8',(err,res)=>{
  res+=data
  fs.writeFile('output.txt',res,'utf8', (err) => {
    if (err) throw err;
    console.log('success');
  })
})

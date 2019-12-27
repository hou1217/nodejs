// 引入fs核心模块
const fs = require('fs')
fs.readFile('input.txt','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})
// stream是一个抽象接口、

//1.写入流
var fs = require("fs");
var data = '';

//  创建可写流
var writerStream = fs.createWriteStream('./data/output.txt');


//  使用 utf8 编码写入数据
for(let i = 0;i<100;i++){
  data+='www.runoob.com\n'
}
writerStream.write(data,'UTF8');
//  标记文件末尾
writerStream.end();

//  处理流事件 --> data, end, and error
writerStream.on('finish', ()=> {
  console.log("写入完成。");
});
writerStream.on('error', (err)=>{
   console.log(err.stack);
});

console.log("程序执行完毕");




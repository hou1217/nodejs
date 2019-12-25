// stream是一个抽象接口、
//1.写入流
// var fs = require("fs");
// var data = 'www.runoob.com';

// // 创建可写流
// var writerStream = fs.createWriteStream('output.txt');


// // 使用 utf8 编码写入数据
// writerStream.write(data,'UTF8');
// // 标记文件末尾
// writerStream.end();

// // 处理流事件 --> data, end, and error
// writerStream.on('finish', function() {
//   console.log("写入完成。");
// });
// writerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");

// 2.管道流：管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
// var fs = require("fs");

// // 创建一个可读流
// var readerStream = fs.createReadStream('input.txt');

// // 创建一个可写流
// var writerStream = fs.createWriteStream('output.txt');

// // 管道读写操作
// // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
// readerStream.pipe(writerStream);

// console.log("程序执行完毕");

// 3.链式流：链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
// 压缩：
// var fs = require("fs");
// var zlib = require('zlib');

// // 压缩 input.txt 文件为 input.txt.gz
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));

// console.log("文件压缩完成。");
// 解压：
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));

console.log("文件解压完成。");


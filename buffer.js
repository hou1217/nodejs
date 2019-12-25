// 一.创建buffer类
// 方法1.
// let buff = new Buffer.alloc(10)
// 方法2.
// let buff = new Buffer.from([1,2,3,4,5])
// 方法3.
// let buff = new Buffer.from('www.baidu.com','utf-8')
// console.log(buff);

// 二.写入缓冲区:buf.write(string[, offset[, length]][, encoding])
// buf = new Buffer.alloc(256);
// len = buf.write("www.runoob.com");

// console.log("写入字节数 : "+  len);

// 三.读取缓冲区：buf.toString([encoding[, start[, end]]])
// buf = new Buffer.alloc(26);
// for (let i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }

// console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii',0,5));   // 输出: abcde
// console.log( buf.toString('utf8',0,5));    // 输出: abcde
// console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

// 四.将Buffer转换为JSON对象：buf.toJSON()
// var buf = new Buffer.from('www.runoob.com');
// var json = buf.toJSON(buf);

// console.log(json);

// 五.缓冲区合并： Buffer.concat(list[,totalLength])
// var buffer1 = new Buffer.from('菜鸟教程 ');
// var buffer2 = new Buffer.from('www.runoob.com');
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3 内容: " + buffer3.toString());

// 六.缓冲区比较：buf.compare(otherBuffer);
// var buffer1 = new Buffer.from('ABC');
// var buffer2 = new Buffer.from('ABCD');
// var result = buffer1.compare(buffer2);

// if(result < 0) {
//    console.log(buffer1 + " 在 " + buffer2 + "之前");
// }else if(result == 0){
//    console.log(buffer1 + " 与 " + buffer2 + "相同");
// }else {
//    console.log(buffer1 + " 在 " + buffer2 + "之后");
// }

// 七.拷贝缓冲区：buf.copy(targetBuffer[, targetStart[, sourceStart[, sourEnd]]])
// var buffer1 = new Buffer.from('ABC');
// // 拷贝一个缓冲区
// var buffer2 = new Buffer.alloc(3);
// buffer1.copy(buffer2);
// console.log("buffer2 content: " + buffer2.toString());

// 八.缓冲区裁剪:buf.slice([start[, end]])
// var buffer1 = new Buffer('runoob');
// // 剪切缓冲区
// var buffer2 = buffer1.slice(0,2);
// console.log("buffer2 content: " + buffer2.toString());

// 九.缓冲区长度：buf.length
var buffer = new Buffer('www.runoob.com');
//  缓冲区长度
console.log("buffer length: " + buffer.length);
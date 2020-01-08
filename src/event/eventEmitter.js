let events = require('events');
let eventEmitter = new events.EventEmitter();
let connectHandler = ()=>{
  console.log('连接成功');
  eventEmitter.emit('data_received');
}
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',()=>{
  console.log('数据接收成功');
})
eventEmitter.emit('connection')
console.log('程序执行完毕');
// 首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。
// 其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。
let fs= require("fs");
// let data = fs.readFileSync('input.txt');
// console.log(data.toString());
fs.readFile('input.txt',(err,res)=>{
  if(err) return console.log(err.stack)
  console.log(res.toString());
})

console.log('程序执行结束');
const timeout = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve();
  }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
  console.log('1');
  return 1;
});

const ajax2 = () => timeout(1000).then(() => {
  console.log('2');
  return 2;
});

const ajax3 = () => timeout(2000).then(() => {
  console.log('3');
  return 3;
});

function mergePromise(ajaxArray) {
  let arr = [];
  return (async function doSth(){
    for(let p of ajaxArray){
      let val = await p();
      arr.push(val);
    }
    return arr;
  })()
}

mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log('done');
  console.log(data); // data 为 [1, 2, 3]
});
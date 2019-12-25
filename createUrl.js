let num = 67
let type = 21
// ------------------
let page = 0;
const arr = [];
for(let i=1;i<=num;i++){
  page = i;
  const str = `https://www.sheup.net/info_tiku_4.php?type=${type}&page=${page}`
  arr.push({
    url:str
  })
}
console.log(JSON.stringify(arr));
const fs = require('fs'); 
let data = JSON.stringify(arr);
fs.writeFile(`type${type}.json`,data,'utf8', (err) => {
  if (err) throw err;
  console.log('success');
})

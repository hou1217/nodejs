const fs = require('fs')
async function run(){
  let res = [];  
  for(let i =1;i<=21;i++){
    let pro = new Promise((resolve,reject)=>{
      fs.readFile(`type${i}.json`,'utf8',(err,data)=>{
        if (err) {
          console.error(err);
          return resolve()
        } 
        res = [].concat(res,JSON.parse(data))
        return resolve()
      })
    })
    await pro
  }
  console.log(11111);
  return res
}


run().then((res)=>{
  console.log(res);
  fs.writeFile('typeAll.json',JSON.stringify(res),'utf8', (err) => {
    if (err) throw err;
    console.log('success');
  })
})

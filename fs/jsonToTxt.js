// 引入fs核心模块
const fs = require('fs')

fs.readFile('data1.json','utf8',(err,data)=>{
  console.log(data);
  const arr = JSON.parse(data);
  let res = `\n`
  function formatAnswers(answers){
    let answersStr = ``; 
    if(answers.length < 6){
      const num = 6 - answers.length;
      answers.forEach(item=>{
        answersStr += `${item}| |`;
      })
      for(let i=0;i<num;i++){
        answersStr += ` | |`;
      }
      
    }else{
      for(let i=0;i<6;i++){
        answersStr += `${answers[i]}| |`;
      }
    }
    return answersStr
  }
  arr.forEach(ele=>{
    res += `${ele.type}|${ele.question}| |${formatAnswers(ele.answers)}|${ele.trueAnswer}\n`
  })
  fs.writeFile('data1.txt',res,'utf8', (err) => {
    if (err) throw err;
    console.log('success');
  })
})
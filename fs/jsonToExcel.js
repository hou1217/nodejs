
// 引入fs核心模块
const fs = require('fs')
const json2xls = require('json2xls');

fs.readFile('data3.json','utf8',(err,data)=>{
  // console.log(data);
  const json = JSON.parse(data);
  const jsonArray = [];
  json.forEach(function(item){
    let answerObj = {};
    if(item.answers.length < 6){
      item.answers.forEach((ele,i)=>{
        answerObj[`选项${i+1}`] = ele.split('：')[1];
        answerObj[`${i+1}图片`] = '';
      })
      
      for(let i=item.answers.length+1;i<=6;i++){
        answerObj[`选项${i}`] = '';
        answerObj[`${i}图片`] = '';
      }
    }else{
      for(let i=0;i<6;i++){
        answerObj[`选项${i+1}`] = item.answers[i].split('：')[1];
        answerObj[`${i+1}图片`] = '';
      }
    }
    let trueAnswer = item.answers.findIndex((element) => element.split('：')[0] === item.trueAnswer.split('：')[0]) + 1;
    let tempArry = Object.assign(
      {
        '类型' : item.type,
        '问题' : item.question,
        '题目图片' : ''
      },
      answerObj,
      {        
        '正确答案' : trueAnswer,
      }
    )
    jsonArray.push(tempArry);
  });
  //this code is for sorting  xls with required value
  // jsonArray.sort(function(a, b) {
  //   return parseFloat(b.ColoumnName) - parseFloat(a.ColoumnName);
  // });
  var xls = json2xls(jsonArray);
  
  fs.writeFileSync('3.xlsx', xls, 'binary');
})
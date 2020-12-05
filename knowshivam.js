var ck=require('chalk');
var readLine=require('readline-sync')
console.log(ck.bold.red('how much you know shivam\n'))
var usrname,userans,score=0,topscore=0;
usrname=readLine.question(ck.magenta('Enter your name :'))
var questions =[{
  question:'1. do you know shivam',
  answer:'yes'
},{
  question:'2. do shivam love to eat out',
  answer:'yes'
}
,{
  question:'3. shivam can code or not',
  answer:'yes'
},{
  question:'4. where shivam lives',
  answer:'ujjain'
},{
  question:'5. how old shivam is.',
  answer:'20'
},{
  question:'6. is shivam is earlyriser',
  answer:'sometimes'
}];
for(i=0;i<=questions.length-1;i++){
console.log(ck.red(questions[i].question))
userans=readLine.question(ck.green('type any option :'))
if(questions[i].answer===userans)
{
  console.log('right ! your answer is ' +userans)
  score++;
}else{
  console.log('wrong answer** \n answer is '+questions[i].answer)
  
}}
console.log(ck.yellow(usrname+' your score is '+score))
if(score>topscore){
  topscore=score
  };
console.log('top score is '+topscore)
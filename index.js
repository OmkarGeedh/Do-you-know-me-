var readlineSync = require('readline-sync');

var score = 0;
var username = readlineSync.question('What is your name?  ');
usernameUpper = username.toUpperCase();
console.log('Welcome ' + usernameUpper + ' to my Quiz');
console.log('You can type option as answer as well as you can type answer, So lets start quiz!');

function quiz(answer, otherAnswer){
  var userAnswer = readlineSync.question("Answer? : ")
  var lowerAnswer = userAnswer.toLowerCase();

  if((lowerAnswer === answer) || (lowerAnswer === answer)){
    console.log("Wow, you are right! ");
    score=score+1;
    console.log('Your current score is ' +score);
    console.log(' ');
  }
  else{
    console.log('You are wrong :(');
    score=score-1;
    console.log('Your current score is '+score);
    console.log(" ");
  }
}

var array=[
  {
    question:'What is my Surname?\na. Pratap\nb. Mayya\nc. Geedh\nd. None of above',
    answer:'c',
    answerTwo:'Geedh',
  },
  {
    question:"Which city do I live?\na. Kalyan\nb. Bangalore\nc. Delhi\nd. Mumbai",
    answer:"a",
    answerTwo:'Kalyan'
  },

  {
   question:'Which of this I like most?\na. Mobile\nb. PS5\nc. Xbox\nd. Gaming PC ',
   answer:'d',
   answerTwo:'Gaming PC',
  },

  {
    question:'Which of this I like most?\na. MacBook\nb. Surface Book\nc. iPad\nd.All of above',
    answer:'a',
    answerTwo:'MacBook',
  }, 

  {
    question:'Which theme I do prefer?\na. White theme\nb. Polarise theme\nc. Dark theme\nd. Dont Know',
    answer:'c',
    answerTwo:'Dark theme',
  },

  {
  question:"Which is my favorite podcast?\na = Cero\nb = Developer duvidha\nc = Thinking with Tanay\nd = All of the above",
  answer:"d",
  answerTwo:"All of the above"
  },

]

for(var i=0;i<array.length;i++)
{
  console.log("Ques",(i+1),':',(array[i].question));
  quiz(array[i].answer, array[i].answerTwo);
} 
console.log("\n\t Your Final score is:" + score);

if(score==7)
{
  console.log("\nWOW! You have very high Knowledge About me!!!");
}
else {
  if((score==5)||(score==6))
  {
    console.log("\tYou score good!!,Congrats");
  }
  else{
    if((score>=4)&&(score<2))
    {
    console.log("You score is average, Keep it Up!!");
   }
   else
   {
     console.log("You are below average,Blown up Hard!");
   }

  }
}

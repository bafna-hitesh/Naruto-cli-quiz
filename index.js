var readlineSync = require('readline-sync');
var chalk = require('chalk');


var score = 0;

var userName = readlineSync.question(chalk.green("What Is Your Name? "));

console.log(chalk.cyan.bold("Welcome " + userName.toUpperCase() + " Into A Word Of NARUTO..."));

if(readlineSync.keyInYN(chalk.cyan('Lets Know how Much You Know NARUTO, Are You Excited? ')) === false){
  process.exit();
}

var highScores = [
  {
    name: "Hitesh",
    score: 5
  },

  {
    name: "Akash",
    score: 4,
  },
  {
    name: "Rushabh",
    score: 2
  },
]



function play(question,answer)
{
   var userAnswer = readlineSync.question(chalk.green(question)); //for input
  if (userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.red("Right"));
    score = score + 1;
  }else
  {
    console.log(chalk.red("Wrong"));
  }
  
  console.log(chalk.magentaBright("Your Score Is: " , score));
  console.log(chalk.whiteBright("--------------------------------"));

}

 questions = [{
  
    question : "What is the favourite food of NARUTO? a) Ramen b) Noodles c) Rice boll :-",
    answer : "a"
    },
  {
    question : "Who is the inside of NARUTO? a) one tail b) Eight tail c) Nine Tail:- ",
    answer : "c" 
  },
  {
    question : "Who was the first sensei for Naruto? a)Jiraya b) Minato C) Iruka:- ",
    answer : "c"
  },
  {
    question : "Who Is The Naruto GodFather? a) Iruka b)Jiraya c) Third hokage :- ",
    answer : "b"
  },
  {
    question : "Who Called Naruto A Little Brother? a) Konohamaru b) Himamari c) Sasuke :- ",
    answer : "a"
  }
 ];

for(var i=0 ; i<questions.length ; i++)
 {
   var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
 }
 
function showScore()
{
    // console.log('your final score is', highScores[0].score);

  for(var i=0 ; i<highScores.length;i++)
  {
    var currentScore = highScores[i].score;
    if (score > currentScore)
    {
      console.log(chalk.red.bold("CONGRATS!!! YOU THE GREATEST FAN OF Naruto "));
      console.log(chalk.red.bold("Send me your Screenshot and I'll update it !!"));
      break;
    }else{
         
  console.log(chalk.yellowBright("Check out the high scores"));
    
   highScores.map(score => console.log(chalk.yellow(score.name) + " : " + chalk.red.bold(score.score)));

   break;
    }
     
  }
    
}
  
  
  showScore();




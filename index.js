const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
const highScore = [
    {
        user_name: "computer",
        high_score: 3
    }
];
const userName = readlineSync.question(chalk.green('Hey there, i would love to know you. Could you enter your name? '))
console.log(chalk.cyan("Welcome " + userName));

var questions = [
  {
    question: "What is Adarsh's favourite Operating System? ",
    answer: "MacOS"
  },
  {
    question: "What is Adarsh's favourite drink? ",
    answer: "Tea"
  }, {
    question: "What is Adarsh's favourite movie franchise? ",
    answer: "Star wars"
  }, {
    question: "What is Adarsh's favourite dish? ",
    answer: "butter chicken"
  }
]

function askQuestions(question, answer){
    var response = readlineSync.question(chalk.yellow(question));
    if (response.toLowerCase() === answer.toLowerCase()){
        score++;
        console.log(chalk.green("that's right!"))
    } else {
        console.log(chalk.red("that's wrong!"))
    }
}


for (var i = 0; i < questions.length; i++){
    askQuestions(questions[i].question, questions[i].answer);
}
console.log("Your score: " + score)
if(score >= 2){
    console.log(chalk.green('You know him well!'))
} else if (score == 4){
    console.log(chalk.green("CONGRATULATIONS, you've got the highest score!!!"))
}  else {
    console.log(chalk.red("Maybe you don't know him well"))
}

highScore.push({user_name: userName, high_score: score});

console.log('This is the list of high scores')
function displayHighScore(){
    highScore.map(idx => {
        console.log(idx.user_name + ": " + idx.high_score)
        console.log('-----------------')
    })
}

displayHighScore();
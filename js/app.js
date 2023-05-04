'use strict';

// Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.


let name = prompt('What is your name?: ');
alert(`Hi ${name}, welcome to my site! Let's play a guessing game.  Please respond to each yes or no question with y/n or yes/no.`);

// I am going to keep track of how many correct answers the user gets so I will initialize a counter here.
let correctCount = 0;

// Question 1
function question1(){
  let questionOne = prompt('Do I have any siblings?').toLowerCase();
  if (questionOne === 'y' || questionOne === 'yes'){
    alert('You are right! I have an older brother.');
    correctCount += 1;
  }
  else if (questionOne === 'n' || questionOne === 'no'){
    alert('Sorry, you got that one wrong... I have an older brother.');
  }
  else {
    alert('Invalid responses are counted as incorrect... Please only answer with y/n or yes/no.');
  }
}
question1();

// Question 2
function question2(){
  let questionTwo = prompt('Do I live in California?').toLowerCase();
  if (questionTwo === 'y' || questionTwo === 'yes'){
    alert('Sorry, you got that one wrong... I live in Washington State.');
  }
  else if (questionTwo === 'n' || questionTwo === 'no'){
    alert('You are right! I actually live in Washington State.');
    correctCount += 1;
  }
  else {
    alert('Invalid responses are counted as incorrect... Please only answer with y/n or yes/no.');
  }
}
question2();

// Question 3
function question3(){
  let questionThree = prompt('Did I go to college in St. Louis?').toLowerCase();
  if (questionThree === 'y' || questionThree === 'yes'){
    alert('You are right! I went to Washington University in St. Louis.');
    correctCount += 1;
  }
  else if (questionThree === 'n' || questionThree === 'no'){
    alert('Sorry, you got that one wrong... I went to Washington University in St. Louis.');
  }
  else {
    alert('Invalid responses are counted as incorrect... Please only answer with y/n or yes/no.');
  }
}
question3();

// Question 4
function question4(){
  let questionFour = prompt('Did I work previously as a mechanic?').toLowerCase();
  if (questionFour === 'y' || questionFour === 'yes'){
    alert('Sorry, you got that one wrong... I worked as a mechanical engineer.');
  }
  else if (questionFour === 'n' || questionFour === 'no'){
    alert('You are right! I actually worked as a mechanical engineer.');
    correctCount += 1;
  }
  else {
    alert('Invalid responses are counted as incorrect... Please only answer with y/n or yes/no.');
  }
}
question4();

// Question 5
function question5(){
  let questionFive = prompt('Do I have any pets?').toLowerCase();
  if (questionFive === 'y' || questionFive === 'yes'){
    alert('You are right! I have a cat and a dog!');
    correctCount += 1;
  }
  else if (questionFive === 'n' || questionFive === 'no'){
    alert('Sorry, you got that one wrong... I have a cat and a dog.');
  }
  else {
    alert('Invalid responses are counted as incorrect... Please only answer with y/n or yes/no.');
  }
}
question5();

// Question 6
function question6(){
  let questionSix = Number(prompt('How old am I? (Enter only numbers)'));
  let guessCount = 0;

  while (guessCount !== 4){
    if (questionSix === 33){
      alert('Exactly right! I am 33 years old.');
      correctCount += 1;
      break;
    }
    else if (questionSix > 33){
      alert(`I am not quite that old. You have ${3 - guessCount} guesses remaining.`);
      guessCount += 1;
      if (guessCount === 4){
        alert('Sorry you are out of guesses. The correct answer was 33.');
        break;
      }
      questionSix = Number(prompt('How old am I? (Enter only numbers'));
    }
    else if (questionSix < 33){
      alert(`I am older than that! You have ${3 - guessCount} guesses remaining.`);
      guessCount += 1;
      if (guessCount === 4){
        alert('Sorry you are out of guesses. The correct answer was 33.');
        break;
      }
      questionSix = Number(prompt('How old am I? (Enter only numbers)'));
    }
    else {
      alert(`It looks like you entered something that was not a number.  Please only enter numbers on your next guess! You have ${3 - guessCount} guesses remaining.`);
      guessCount += 1;
      if (guessCount === 4){
        alert('Sorry you are out of guesses. The correct answer was 33.');
        break;
      }
      questionSix = Number(prompt('How old am I? (Enter only numbers)'));
    }
  }
}
question6();


// Question 7
function question7(){
  let favFood = ['tacos', 'burgers', 'pizza', 'sushi', 'chips'];
  let questionSeven = prompt('Can you guess one of my five favorite foods to eat?').toLowerCase();
  let breakAll = false;
  let guessCount = 0;

  while (guessCount !== 6){
    for (let i = 0; i < favFood.length; i++){
      if (questionSeven === favFood[i] || (questionSeven + 's') === favFood[i]){
        alert(`You got it! That is one of my favorite foods. The possible answers were ${favFood[0]}, ${favFood[1]}, ${favFood[2]}, ${favFood[3]}, and ${favFood[4]}.`);
        correctCount += 1;
        breakAll = true;
        break;
      }
    }
    if (breakAll === true){
      break;
    }
    else {
      alert(`Nope! That is not one of them, try again.  You have ${5 - guessCount} guesses remaining.`);
      guessCount += 1;
      if (guessCount === 6){
        alert(`Sorry, you are out of guesses.  The possible answers were ${favFood[0]}, ${favFood[1]}, ${favFood[2]}, ${favFood[3]}, and ${favFood[4]}.`);
        break;
      }
      questionSeven = prompt('Can you guess one of my five favorite foods to eat?').toLowerCase();
    }
  }
}
question7();

alert(`Great job ${name}, you got ${correctCount} out of 7 correct!`);


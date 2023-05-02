'use strict';

// Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.


let name = prompt('What is your name?: ');
alert(`Hi ${name}, welcome to my site! Let's play a guessing game.  Please respond to each question with y/n or yes/no.`);

// I am going to keep track of how many correct answers the user gets so I will initialize a counter here.
let correctCount = 0;

// Question 1
let questionOne = prompt('Do I have any siblings?').toLowerCase();
if (questionOne === 'y' || questionOne === 'yes'){
  alert('You are right! I have an older brother.');
  correctCount += 1;
}
else if (questionOne === 'n' || questionOne === 'no'){
  alert('Sorry, you got that one wrong... I have an older brother.');
}
else {
  alert('Invalid responses are counted as incorret... Please only answer with y/n or yes/no.');
}

// Question 2
let questionTwo = prompt('Do I live in California?').toLowerCase();
if (questionTwo === 'y' || questionTwo === 'yes'){
  alert('Sorry, you got that one wrong... I live in Washington State.');
}
else if (questionTwo === 'n' || questionTwo === 'no'){
  alert('You are right! I actually live in Washington State.');
  correctCount += 1;
}
else {
  alert('Invalid responses are counted as incorret... Please only answer with y/n or yes/no.');
}

// Question 3
let questionThree = prompt('Did I go to college in St. Louis?').toLowerCase();
if (questionThree === 'y' || questionThree === 'yes'){
  alert('You are right! I went to Washington University in St. Louis.');
  correctCount += 1;
}
else if (questionThree === 'n' || questionThree === 'no'){
  alert('Sorry, you got that one wrong... I went to Washington University in St. Louis.');
}
else {
  alert('Invalid responses are counted as incorret... Please only answer with y/n or yes/no.');
}

// Question 4
let questionFour = prompt('Did I work previously as a mechanic?').toLowerCase();
if (questionFour === 'y' || questionFour === 'yes'){
  alert('Sorry, you got that one wrong... I worked as a mechanical engineer.');
}
else if (questionFour === 'n' || questionFour === 'no'){
  alert('You are right! I actually worked as a mechanical engineer.');
  correctCount += 1;
}
else {
  alert('Invalid responses are counted as incorret... Please only answer with y/n or yes/no.');
}

// Question 5
let questionFive = prompt('Do I have any pets?').toLowerCase();
if (questionFive === 'y' || questionFive === 'yes'){
  alert('You are right! I have a cat and a dog!');
  correctCount += 1;
}
else if (questionFive === 'n' || questionFive === 'no'){
  alert('Sorry, you got that one wrong... I have a cat and a dog.');
}
else {
  alert('Invalid responses are counted as incorret... Please only answer with y/n or yes/no.');
}

alert(`Great job ${name}, you got ${correctCount} out of 5 correct!`);


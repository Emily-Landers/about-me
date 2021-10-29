'use strict'; 

let correctAnswers = 0
let name = prompt('What is your name?');
function getUserName(){
    //console.log(name)
    }
        document.write('Welcome ' + name)
getUserName()

function puppy(){
  let dog = prompt('Do I have a dog?');
  if (dog.toLowerCase() == ('yes')){
  alert("Correct!");
  correctAnswers++; 
  }
  else{
      alert("Incorrect!")
  }
}


function vegetarian(){
  let food = prompt('Am I a vegetarian?');
  if (food.toLowerCase() == ('yes')){
  alert("Correct!");
  //console.log("correct!")
  correctAnswers++;
  }
  else{
      alert("Incorrect!")
  }
}

function potatoes(){
  let potato = prompt('Did I eat 4 potatoes worth of french fries for dinner?');
  if (potato.toLowerCase() == ('yes')){
  alert("Correct!");
  //console.log("correct!")
  correctAnswers++;
  }
  else{
      alert("Incorrect!")
  }
}

function myPet(){
  let cat = prompt('Do I have a cat?');
  if (cat.toLowerCase() == ('yes')){
  alert("Correct!");
  //console.log("correct!")
  correctAnswers++;
  }
  else{
      alert("Incorrect!")
  }
}

function hair(){
  let blonde = prompt('Is my hair naturally blonde?');
  if (blonde.toLowerCase() == ('no')){
  alert("Correct!");
  //console.log("correct!")
  correctAnswers++;
  }
  else{
      alert("Incorrect!")
  }
}

//Call functions for questions
puppy();
vegetarian();
potatoes();
myPet();
hair();

function game(){
    let play = prompt('Do you want to play a game?');
    let correctAnswer; 
    if (play == 'yes'){
    correctAnswer = Math.floor(Math.random() * 100);
    }
    if (play.toLowerCase() == 'yes'){
        let numberOfAttempts = 4;
        for(let i = 1; i <= numberOfAttempts; i++){
            let answer = prompt("Guess a number between 1 and 100");
            console.log("correct answer" , correctAnswer)
            console.log("your answer" , answer)
             if(answer < correctAnswer){
                 console.log("emily is better than sean at league")
                alert('Your answer is to low. You have ' + (numberOfAttempts - i) + ' attempts left');  
            } else if (answer > correctAnswer){
                alert('Your answer is to high. You have ' + (numberOfAttempts - i) + ' attempts left');
            } else {
                alert('You got it right!');
                correctAnswers++;
                break;
            } if(numberOfAttempts < 1){
                console.log('its working');
                alert('The correct answer is ' + correctAnswer);
            }
        }
        
    
    }
    
}
game()

function colorGame(){
    let answer = prompt('What is one of my favorite colors?').toLowerCase();
    let correctAnswer = ['green', 'blue'];
    let numberOfAttempts = 6 ;
    for(let i = 1; i <= numberOfAttempts; i++){
            console.log("correct answer" , correctAnswer)
            console.log("your answer" , answer)
             if(correctAnswer[0] == answer || 
                correctAnswer[1] == answer){
             alert('You got it right!');
             correctAnswers++;
                break;
            } else { 
            alert('Incorrect, You have ' + (numberOfAttempts - i) + ' attempts left');
            }
            answer = prompt('What are my favorite colors?').toLowerCase();
        }
}
colorGame()

 alert(`You got  ${correctAnswers} out of 7 right!`)
 alert('Thank you for playing ' + name + '!')
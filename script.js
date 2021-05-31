'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number!';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
 */
let secretNumber = Math.trunc(Math.random()*20 ) +1 ;
let score = 10;
let heighScore = 0;
const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click' , function(){

    const guess = Number (document.querySelector('.guess').value);
    console.log(guess,typeof guess );
    // when there is no inpurt
    if (!guess){
        // document.querySelector('.message').textContent ='no number';
        displayMessage('no number');
        // when players win
    } else if (guess === secretNumber){
        // document.querySelector('.message').textContent = 'correct number';
        displayMessage('correct number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.color = 'green';
        document.querySelector('.number').style.border = '5px solid green';
        if (score > heighScore){
            heighScore = score;
            document.querySelector('.highscore').textContent = heighScore;
        }
    }else if (guess !== secretNumber){
        if (score > 1){
        displayMessage(guess > secretNumber ? 'your number is too high': 'your number is too low!');
        // document.querySelector('.message').textContent = guess > secretNumber ? 'your number is too high': 'your number is too low!';
        score--;
        document.querySelector('.score').textContent = score;                
    }
     else{
        // document.querySelector('.message').textContent = ' you lost the game';
        displayMessage(' you lost the game');
        document.querySelector('.score').textContent = 0;
            
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.color = 'red';            
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').style.border = '5px solid red';                    }
    }
//         // when guess is higher
//     else if (guess > secretNumber) {
//         if (score > 1){

//             document.querySelector('.message').textContent = ' your number is higher try again '
//             score--;
//             document.querySelector('.score').textContent = score;
//         }else{
//             document.querySelector('.message').textContent = ' you lost the game'
//             document.querySelector('.score').textContent = 0;

//             document.querySelector('.number').textContent = secretNumber;
//             document.querySelector('.number').style.width = '30rem';
//             document.querySelector('.number').style.color = 'red';
//             document.querySelector('body').style.backgroundColor = 'red';
//             document.querySelector('.number').style.border = '5px solid red';
//         }
// // when guess is lower
//     }else if (guess< secretNumber ){
//             if(score > 1){
//                 document.querySelector('.message').textContent = 'your number is lower try again !';
//                 score--;
//                 document.querySelector('.score').textContent = score;        
//             }else{
//                 document.querySelector('.message').textContent = 'you lost the game !';
//                 document.querySelector('.score').textContent = 0;
                
//                 document.querySelector('.number').textContent = secretNumber;
//                 document.querySelector('.number').style.width = '30rem';
//                 document.querySelector('.number').style.color = '#810000';
//                 document.querySelector('body').style.backgroundColor = '#810000';
//                 document.querySelector('.number').style.border = '5px solid #ce1212';
//             }

//     }
});


document.querySelector('.again').addEventListener('click' ,function(){
    score = 10;
    document.querySelector('.score').textContent = score;
     secretNumber = Math.trunc(Math.random()*20 ) +1 ;
     document.querySelector('.number').textContent = "?";
     document.querySelector('.number').style.width = '15rem';
     document.querySelector('.number').style.color = '#222';
     document.querySelector('.number').style.border = 'none';
     document.querySelector('body').style.backgroundColor = '#222';
    //  document.querySelector('.message').textContent = 'Start guessing ... '
    displayMessage('Start guessing ... '); 
    document.querySelector('.guess').value = ''; 
    })
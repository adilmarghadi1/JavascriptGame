var randomNumber = Math.floor(Math.random() * 100) + 1;

var remaining = document.getElementById('remaining')
var guess = document.querySelector('.guess');
var Result = document.querySelector('.Result');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var count = 9;
var guessCount = 1;
 function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guess.textContent = 'Previous guesses: ';
  }
  guess.textContent += userGuess + ' ';

  if (count==9 || count >= 0 )
  {

      remaining.textContent = `${count--}`
  }

  
    

  if (userGuess === randomNumber && guessCount<=2) {
    Result.textContent = 'Bravo, vous etes un Genie !!!';
    Result.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
  } 
  
  else if (userGuess === randomNumber){
        Result.textContent = `Félicitations, vous avez gagné après ${guessCount} tentatives`;
        Result.style.backgroundColor = 'green';
       lowOrHi.textContent = '';
    }

    else if (guessCount === 10 || guessCount>10) {
    Result.textContent = '!!!GAME OVER!!!';
  } 

  else {
    Result.textContent = "C'est raté !!!";
    Result.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was  low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was  high!';
    }
  }

  guessCount++;
  guessField.value = '';
  }

  guessSubmit.addEventListener('click', checkGuess);

const options = ["Rock", "Paper", "Scissors"];
const maxRound = 5;
let rounds = 0;

let pScore = 0;
let cScore = 0;

let selection = null;

const modal = document.getElementById('myModal');

const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');

//Event handlers for on the displayed items
rock.addEventListener('click', () => {
  userPick(rock.id);
});

paper.addEventListener('click', () => {
  userPick(paper.id);
});

scissors.addEventListener('click', () => {
  userPick(scissors.id);
})

//Randomly generates the computer selected option
function computerPick(){
  return options[Math.floor(Math.random() * options.length)];
}

function userPick(id){
  playRound(id, computerPick());
}

// Game Logic Handler
function playRound(playerSelection, computerSelection){

  if(rounds < maxRound){

    if(playerSelection === computerSelection){
      document.getElementById('subtitle').innerHTML = 'It\'s\' a tie';
    }

    switch (playerSelection) {
      case "Rock":
        if(computerSelection === "Paper"){
          cScore++;
          document.getElementById('computerScore').innerHTML = '' + cScore;
          document.getElementById('subtitle').innerHTML = 'You Lost this round!';
        } else {
          pScore++;
          document.getElementById('playerScore').innerHTML = '' + pScore;
          document.getElementById('subtitle').innerHTML = 'You Won this round!';
        }
        break;
      case "Paper":
        if(computerSelection === "Scissors"){
          cScore++;
          document.getElementById('computerScore').innerHTML = '' + cScore;
          document.getElementById('subtitle').innerHTML = 'You Lost this round!';
        } else{
          pScore++;
          document.getElementById('playerScore').innerHTML = '' + pScore;
          document.getElementById('subtitle').innerHTML = 'You Won this round!';
        }
        break;
      case "Scissors":
        if(computerSelection === "Rock"){
          cScore++;
          document.getElementById('computerScore').innerHTML = '' + cScore;
          document.getElementById('subtitle').innerHTML = 'You Lost this round!';
        } else{
          pScore++;
          document.getElementById('playerScore').innerHTML = '' + pScore;
          document.getElementById('subtitle').innerHTML = 'You Won this round!';
        }
        break;
      default:
        break;
      }
    }

  compareScore();
}

//Works out the score after each round has completed
function compareScore(){

  if(rounds < maxRound){
    rounds++;
  }else if(rounds === maxRound){
    modal.style.display = "block";
    if(pScore < cScore){
      document.getElementById('game-result').innerHTML = 'You Lose!';
    }else if(pScore > cScore){
      document.getElementById('game-result').innerHTML = 'You Won!';
    }else{
      document.getElementById('game-result').innerHTML = 'It\'s\' a tie';
    }
  }
}

//Restarts Game
function startAgain(){
  window.location.reload();
}

//Hides the popup window that is shown when the game has completed
function dismiss(){
  modal.style.display = "none";
}

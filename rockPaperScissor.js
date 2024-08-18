const getUserChoice = (userInput)=>{
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }
  else{
    console.log("Error!")
  }
}

const getComputerChoice = ()=>{
  const compSelection = Math.floor(Math.random() * 3);


  if(compSelection === 0){
    return 'rock';
  }

  if(compSelection === 1){
    return 'scissor';
  }

  if(compSelection === 2){
    return 'paper';
  }

}

const winnerSelection=(userChoice, compChoice) =>{
  if (userChoice===compChoice){
    return console.log("You have tied!")
  }

  if(userChoice === "rock"){

    if(compChoice==="paper"){
      return console.log("You have lost!")
    }
    else{
      return console.log("You have won!")
    }
  }

  if(userChoice==="paper"){
    if(compChoice==="scissor"){
      return console.log("You have lost!")
    }
    else{
      return console.log("You have won!")
    }

  }

  if(userChoice==="scissor"){
    if(compChoice==="rock"){
      return console.log("You have lost!")
    }
    else{
      return console.log("You have won!")
    }

  }
}

const gameLoop=()=>{
    let userChoice = getComputerChoice()
    console.log("You selected " + userChoice)
    let compChoice = getComputerChoice()
    console.log("The computer has selected " + compChoice)

    winnerSelection(userChoice,compChoice)

}


gameLoop();

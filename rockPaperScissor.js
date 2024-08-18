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
    return "You have tied!"
  }

  if(userChoice === "rock"){

    if(compChoice==="paper"){
      return "You have lost!"
    }
    else{
      return "You have won!"
    }
  }

  if(userChoice==="paper"){
    if(compChoice==="scissors"){
      return "You have lost!"
    }
    else{
      return "You have won!"
    }

  }

  if(userChoice==="scissors"){
    if(compChoice==="rock"){
      return "You have lost!"
    }
    else{
      return "You have won!"
    }

  }
}



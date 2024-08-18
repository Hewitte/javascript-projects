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

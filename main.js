// FIRST INTERACTIVE GAME

let playGame = confirm("shall we play rock,paper or secissor?"); 
if(playGame){
    while(playGame){
    const playerchoice = prompt ("pleace enter rock,paper or secissor") ;
    if(playerchoice || playerchoice === ""){
        const playerone = playerchoice.trim().toLowerCase();
        if (
            playerone === "rock" ||
             playerone === "paper" ||
             playerone === "secissor"
             ) {
        const computerchoice = Math.floor(Math.random()*3+1);
        const rpsArray =["rock","paper","secissor"];
        const computer =rpsArray[computerchoice];
    
    const result =
       playerone === computer
       ? "Tie Game!"
       :playerone === "rock" && computer === "paper"
       ? 'playerone: ${playerone}\ncomputer: ${computer}\nComputer Wins!'
       :playerone === "paper" && computer === "secissor"
       ? 'playerone: ${playerone}\ncomputer: ${computer}\nComputer Wins!'
       : playerone === "secissor" && computer === "rock"
       ?'playerone: ${playerone}\ncomputer: ${computer}\nComputer Wins!'
       :'playerone: ${playerone}\ncomputer: ${computer}\nplayerone Wins!';
    alert(result);
    playGame = confirm("Play Again");
     if (!playGame)alert("ok,thanks for playing.");
     continue;
   } else {
    alert("you didn't enter rock,paper, or scissors.");
    continue;
   }
} else{
    alert("I guess you changed your mind. maybe next time.");
    break;
}
} 
} else {
    alert("ok,maybe next time.")
}
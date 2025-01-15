//use math.random
//generate a number
// if the number >0.75, let answer == scicsors
// if answer <0.25, let answer = paper
// else let answer == sciors

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let number = Math.random();
    if(number> 0.75){
        console.log("Comp chose scissors");
        return "Scissors"
    }
    else if(number<0.25){
        console.log("Comp chose paper");

        return "Paper"
    }
    else{
        console.log("Comp chose rock");

        return "Rock"

    }
}
function getHumanChoice(){
    let answer = prompt("What is your choice?");
    return answer;
}
/*So this function takes 2 param and basically compares it*/
function playRound(x,y){
    
    let humanChoice = x.toUpperCase();
    let computerChoice = y.toUpperCase();
    if(humanChoice === computerChoice){
        console.log(`It's a tie!!! ${humanChoice} is the same as ${computerChoice}`);
    }
    else if((humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")){
            humanScore++;
            console.log(`Human wins!!! ${humanChoice} beats ${computerChoice}`);
        }
        else{
            computerScore++;
            console.log(`Computer wins!!! ${computerChoice} beats ${humanChoice}`);


        }

        
        
    
    
}
for(let i =0;i<5;i++){
    console.log(`Round ${i+1}`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human Score is ${humanScore} and Computer Score is ${computerScore}`);
    console.log("_____________________________________________________________________")


}

function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3 + 1);
    switch (ComputerChoice) {
        case 1:
            return "rock"
            break;
        
        case 2:
            return "paper"
            break;
        
        case 3:
            return "scissors"
            break;
    }
}

// function getHumanChoice() {
//     let message = "Please Enter 1 to 3 To Decide Your Choice\n" + 
//         "[1] Rock\n" + "[2] Paper\n" + "[3] Scissors\n"
//     let HumanChoice = +prompt(message);
//     switch (HumanChoice) {
//         case 1:
//             return "rock"
//             break;
        
//         case 2:
//             return "paper"
//             break;
        
//         case 3:
//             return "scissors"
//             break;
//     }
// }

function getHumanChoice() {
    let HumanChoice = prompt("Please Enter Your Choice");
    return HumanChoice
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    function playRound() {
        round++;
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        humanChoice = humanChoice.toLowerCase()
        let roundWinner;
    
        if (humanChoice === computerChoice)
        {
            roundWinner = "Draw! You both chose " + computerChoice;
        } 
        else if (humanChoice === "rock" && computerChoice === "scissors") 
        {
            humanScore++;
            roundWinner = `You Win! ${humanChoice} beats ${computerChoice}`
        } 
        else if (humanChoice === "paper" && computerChoice === "rock") 
        {
            humanScore++;
            roundWinner = `You Win! ${humanChoice} beats ${computerChoice}`
        }
        else if (humanChoice === "scissors" && computerChoice === "paper")
        {
            humanScore++;
            roundWinner = `You Win! ${humanChoice} beats ${computerChoice}`
        }
        else
        {
            computerScore++;
            roundWinner = `You lose! ${computerChoice} beats ${humanChoice}`
        }
        console.log(`\n\nRound          : ${round}\n`)
        console.log(`Computer Choice: ${computerChoice}\n`)
        console.log(`Your Choice    : ${humanChoice}\n`)
        console.log(`Round Winner   : ${roundWinner}\n`)
        console.log(`\nYour Score = ${humanScore}           Computer Score = ${computerScore}\n`)
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    let gameWinner;
    if (computerScore > humanScore)
        gameWinner = "The Computer Wins The Game"
    else if (computerScore < humanScore)
        gameWinner = "You win The Game"
    else
        gameWinner = "It's a DRAW!"
    
    console.log(`\n\n${gameWinner}`)
}

playGame();
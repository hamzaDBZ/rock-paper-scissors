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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    let gameWinner;
    function playRound(playerSelection) {
        if (round > 5) return;
        round++;
        let humanChoice = playerSelection;
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

        const result = document.querySelector(".result");

        if (round <= 5) {
            if (computerScore > humanScore)
            gameWinner = "The Computer Wins The Game"
            else if (computerScore < humanScore)
            gameWinner = "You win The Game"
            else
            gameWinner = "It's a DRAW!"
        }

        let domRound = document.createElement('div');
        domRound.innerHTML = `<br><br>Round          : ${round}<br><br>`;

        let domComputerChoice = document.createElement('div');
        domComputerChoice.innerHTML = `Computer Choice: ${computerChoice}`;

        let domYourChoice = document.createElement('div');
        domYourChoice.innerHTML = `Your Choice    : ${humanChoice}`;

        let domRoundWinner = document.createElement('div');
        domRoundWinner.innerHTML = `Round Winner   : ${roundWinner}`;

        let domYourScore = document.createElement('div');
        domYourScore.innerHTML = `<br>Your Score = ${humanScore} <br> Computer Score = ${computerScore}<br>`;

        result.appendChild(domRound);
        result.appendChild(domComputerChoice);
        result.appendChild(domYourChoice);
        result.appendChild(domRoundWinner);
        result.appendChild(domYourScore);

        if (round === 5) {
            let domGameWinner = document.createElement('div');
            domGameWinner.innerHTML = `<br><br>${gameWinner}`;
            result.appendChild(domGameWinner);
            round++;
        }
    }

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => playRound(rock.textContent));
    paper.addEventListener('click', () => playRound(paper.textContent));
    scissors.addEventListener('click', () => playRound(scissors.textContent));
}

playGame();
const choices = ["rock", "paper", "scissors"];
let RPSresult = "unknown";

game();

function getComputerChoice() {
    let cpuChoice = choices[Math.floor(Math.random()*choices.length)];
    return cpuChoice;
};

function rockpaperscissors(playerSelection, computerSelection) {
    if(playerSelection=="rock" && computerSelection=="scissors") {
        console.log("You win, rock beats scissors!");
        RPSresult = "Win";
        return RPSresult;
    } else if (playerSelection=="scissors" && computerSelection=="paper") {
        console.log("You win, scissors beats paper!");
        RPSresult = "Win";
        return RPSresult;
    } else if (playerSelection=="paper" && computerSelection=="rock") {
        console.log("You win, paper beats rock!");
        RPSresult = "Win";
        return RPSresult;
    } else if (playerSelection=="rock" && computerSelection=="paper") {
        console.log("You lose, rock beats paper!");
        RPSresult = "Lose";
        return RPSresult;
    } else if (playerSelection=="paper" && computerSelection=="scissors") {
        console.log("You lose, scissors beats paper!");
        RPSresult = "Lose";
        return RPSresult;
    }  else if (playerSelection=="scissors" && computerSelection=="rock") {
        console.log("You lose, rock beats scissors!");
        RPSresult = "Lose";
        return RPSresult;
    } else if (playerSelection==computerSelection) {
        console.log("You tie! Try again.");
        RPSresult = "Tie";
        return RPSresult;
    }
}

function playRound() {
    let playerSelection = prompt("Do you choose rock, paper, or scissors?");
    playerSelection = playerSelection.trim().toLowerCase();
    cpuChoice = getComputerChoice(choices);
    console.log(cpuChoice);
    console.log(rockpaperscissors(playerSelection, cpuChoice));
}

function game() {
    let winCount = 0;
    let loseCount = 0;
    let tieCount = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
        if (RPSresult == "Win") {
            winCount++;
        } else if (RPSresult == "Lose") {
            loseCount++;
        } else if (RPSresult == "Tie") {
            tieCount++;
        }
        console.log(`Player wins = ${winCount}, computer wins = ${loseCount}, and ties = ${tieCount}.`);
    }
    console.log(`FINAL SCORE! Player: ${winCount} | Computer: ${loseCount} | Draw: ${tieCount}`);
}
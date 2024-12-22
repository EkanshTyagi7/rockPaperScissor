
let plays = ['rock', 'paper', 'scissor']
let sign, humanScore = 0, computerScore = 0
let i = 1

function getComputerChoice() {
    return plays[Math.floor(Math.random() * plays.length)]
}

function getHumanChoice() {

    while (sign != 'rock' && sign != 'paper' && sign != 'scissor') {
        sign = prompt("What's your play?");
        sign = sign.toLowerCase();
    }

    return sign
}

function playRound(humanChoice, computerChoice) {

    console.log(humanChoice + ' vs ' + computerChoice)

    if ((humanChoice == 'rock' && computerChoice == 'paper') ||
        (humanChoice == 'paper' && computerChoice == 'scissor') ||
        (humanChoice == 'scissor' && computerChoice == 'rock')
    ) {
        computerScore++
    } else if ((humanChoice == 'rock' && computerChoice == 'scissor') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissor' && computerChoice == 'paper')
    ) {
        humanScore++
    } else if(humanChoice == computerChoice){
        console.log('Draw')
    }

}

for (i = 1; i <= 5; i++) {

    console.log('Round:-' + i)
    
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(humanChoice,computerChoice)

    console.log('HumanScore: ' + humanScore + '\n' + 'ComputerScore: ' + computerScore)
    sign = null

    if (i == 5) {
        if(humanScore>computerScore){
            console.log('The player wins')
        }else{
            console.log('The computer wins')
        }
    }
}





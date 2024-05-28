function getComputerChoice() {
    let x = Math.floor(Math.random()*3)
    let y
    if (x==0) {
        y = "rock"
    }
    else if (x==1) {
        y = "paper"
    }
    else if (x==2) {
        y = "scissors"
    }
    else {
        y = "i fked up my fn"
    }
    return y
}

let cc = getComputerChoice()

function getHumanChoice() {
    return prompt("What do you chose to defeat me?")  
}

let hc = getHumanChoice().toLowerCase()

console.log(cc)
console.log(hc)

let humanScore = 0
let computerScore = 0

function playRound(hc, cc) {
    
}
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

function playRound(cc, hc) {
    if (cc === hc) {
        y = "It's a tie, bruh"
    }
    else if (cc === "rock" && hc === "paper" || cc === "paper" && hc === "scissors" ||  cc === "scissors" && hc === "rock") {
        y = `Ughh, You've won. Take a point. (${hc} beats ${cc})`
    }
    else if (cc === "rock" && hc === "scissors" || cc ==="paper" && hc === "rock" || cc === "scissors" && hc === "paper") {
        y = `Yayy, I win! (${cc} beats ${hc})`
    }
    else {
        y = "I might've fucked up my code again"
    }
    return y
}

let result = playRound(cc, hc)

console.log(result)
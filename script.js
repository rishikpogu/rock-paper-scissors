function getComputerChoice() {
    let x = Math.floor(Math.random()*3)
    if (x==0) {
        return "rock"
    }
    else if (x==1) {
        return "paper"
    }
    else if (x==2) {
        return "scissors"
    }
    else {
        return "i fked up my fn"
    }
}

let cc = getComputerChoice()

function getHumanChoice() {
    return prompt("What do you chose to defeat me?")  
}

let hc = getHumanChoice()

console.log(cc)
console.log(hc)
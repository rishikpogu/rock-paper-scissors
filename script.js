function getComputerChoice() {
    let x = Math.floor(Math.random()*3)
    if (x==0) {
        return "rock"
    }
    if (x==1) {
        return "paper"
    }
    if (x==2) {
        return "scissors"
    }
}

console.log(getComputerChoice())
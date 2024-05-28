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

function getHumanChoice() {

}

console.log(getComputerChoice())
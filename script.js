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

let cc
let hc
let humanScore = 0
let computerScore = 0

function result() {
    
    // do playRound(cc, hc); while (computerScore < 5 && humanScore < 5)

    if (humanScore === computerScore) {
        console.log("C'mon, a tie finally, bruhhh.")
    }
    else if (humanScore > computerScore) {
        console.log(`Congo, You win by ${humanScore - computerScore} pts. I'll comeback stronger!!!`)
    }
    else if (humanScore < computerScore) {
        console.log(`Yayy! I win by ${computerScore - humanScore} pts. Comeback stronger soldier. Respect++`)
    }
    else {
        console.log("I'm sure I'm not that worse to fk up my code thrice")
    }
    console.log("Press any button to restart!")
}

let cchoice = document.querySelector('#cchoice')
let hchoice = document.querySelector('#hchoice')
let round = document.querySelector('#round')
let cscore = document.querySelector('#cscore')
let hscore = document.querySelector('#hscore')

function playRound(cc, hc) {
    cc = getComputerChoice()
    // hc = getHumanChoice().toLowerCase()

    if (cc === hc) {
        y = "It's a tie, bruh"
    }
    else if (cc === "rock" && hc === "paper" || cc === "paper" && hc === "scissors" ||  cc === "scissors" && hc === "rock") {
        y = `Ughh, You've won. Take a point. (${hc} beats ${cc})`
        humanScore++
    }
    else if (cc === "rock" && hc === "scissors" || cc ==="paper" && hc === "rock" || cc === "scissors" && hc === "paper") {
        y = `Yayy, I win! (${cc} beats ${hc})`
        computerScore++
    }
    else {
        y = "I might've fucked up my code again"
    }

    cchoice.textContent = `My Choice: ${cc}`
    hchoice.textContent = `Your Choice: ${hc}`
    round.textContent = `Commentary: ${y}`
    cscore.textContent = `My Score: ${computerScore}`
    hscore.textContent = `Your Score: ${humanScore}`
    // console.log(`my choice ${cc}`)
    // console.log(`your choice ${hc}`)
    // console.log(y)
    // console.log(`my score ${computerScore}`)
    // console.log(`your score ${humanScore}`)

    if (computerScore === 5 || humanScore === 5) {
        result()
        computerScore = 0
        humanScore = 0
    }
}

let btn = document.querySelector('#buttons');
btn.addEventListener('click', (event) => {
    let target = event.target;
    
    switch(target.id) {
        case 'r':
            hc = 'rock';
            playRound(cc, hc);
            break;
        case 'p':
            hc = 'paper';
            playRound(cc, hc);
            break;
        case 's':
            hc = 'scissors';
            playRound(cc, hc);
            break;
    }
});
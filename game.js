let youScore = document.getElementById("player1")
let compScore = document.getElementById("player2")

let youHand = document.getElementById("youHand")
let compHand = document.getElementById("compHand")

let rockbtn = document.getElementById("rockbtn")
let paperbtn = document.getElementById("paperbtn")
let scissorsbtn = document.getElementById("scissorsbtn")

let gameover = document.getElementById("gameover")
let winLoss = document.getElementById("winLoss")

let playAgain = document.getElementById("playAgain")

let rock = 'assets/rock-hand.png'
let paper = 'assets/paper-hand.png'
let scissor = 'assets/scissors-hand.png'

let youscoree = 0
let computerScore = 0

let random = [rock,paper,scissor]
let player ;
let computer;

function compHand1(){
    let randomHand = random[Math.floor(Math.random()*random.length)];
    console.log(randomHand)
    compHand.src= randomHand
    compHand.style.width = "80%"
    computer = randomHand
}
rockbtn.onclick =()=>{
    youHand.src = rock;
    youHand.style.width = "80%"
    player = rock
    compHand1()
    Compare()
    
}
paperbtn.onclick =()=>{
    youHand.src = paper;
    youHand.style.width = "80%"
    player = paper
    compHand1()
    Compare()
}
scissorsbtn.onclick=()=>{
    youHand.src = scissor;
    youHand.style.width = "80%"
    player = scissor
    compHand1()
    Compare()
}
function Compare(){
    if(player == rock && computer== scissor){
        youscoree++;
    }
    else if(player==rock && computer== paper ){
        computerScore++
        
    }
    if(player==paper && computer== rock ){
        youscoree++
        
    }
    else if(player==paper && computer== scissor ){
        computerScore++
     
    }
    if(player==scissor && computer== paper ){
        youscoree++
       
    }
    else if(player==scissor && computer== rock ){
        computerScore++
        
    }
    youScore.innerHTML = youscoree
    compScore.innerHTML = computerScore
    if(youscoree == 5){
        gameover.style.display = 'block'
        winLoss.innerHTML = 'You won the game'
        location.href = "#gameover"
    }
    else if(computerScore == 5){
        gameover.style.display = 'block'
        winLoss.innerHTML = 'Computer won the game'
        location.href = "#gameover"
    }
}
playAgain.onclick=()=>{
    location.reload()

}
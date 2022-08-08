let player1Score = 0
let player2Score = 0
let player1Turn = true


const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function Btn(){
  rollBtn.style.display = "none"
  resetBtn.style.display = "block"
}
function reset() {
  player1Dice.textContent = "-"
  player2Dice.textContent = "-"
  player1Score = 0
  player2Score = 0
  player1Scoreboard.textContent = 0
  player2Scoreboard.textContent = 0
  message.textContent = "Start :Player 1 Turn"
  rollBtn.style.display ='block'
  resetBtn.style.display ="none"
  player1Turn = true
  player1Dice.classList.add("active")
}

 rollBtn.addEventListener("click", function(){
     const randomNumber = Math.floor(Math.random()*6)+1
     if (player1Turn) {
       player1Score += randomNumber
       player1Scoreboard.textContent = player1Score
       player1Dice.textContent = randomNumber
       player1Dice.classList.remove("active")
       player2Dice.classList.add("active")
       message.textContent = "Player 2 Turn"
     } else {
       player2Score += randomNumber
       player2Scoreboard.textContent = player2Score
       player2Dice.textContent = randomNumber
       player2Dice.classList.remove("active")
       player1Dice.classList.add("active")
       message.textContent = "Player 1 Turn"
     }
   
    if (player1Score >= 20) {
      Btn()
      message.textContent = "Player 1 won !"
   } else if (player2Score >= 20) {
      Btn()
      message.textContent = "Player 2 won !"
   }
     player1Turn = !player1Turn
 })

resetBtn.addEventListener("click", function(){
  reset()
})
const Hit = document.querySelector("#Hit");
const Timerval = document.querySelector("#Timer");
let ScoreValue = document.querySelector("#Score");
let bubbleValue = document.querySelector(".bubbletop");


function MakeBubble() {
  let box = "";
  for (let i = 0; i <= 90; i++) {
    box += `<div class="bubble" type="button">${Math.floor(
      Math.random() * 10
    )}</div>`;
  }
  document.querySelector(".bubbletop").innerHTML = box;
}

let timer = 60;
function RunTimer() {
  let interval = setInterval(() => {
    if (timer >= 0) {
      Timerval.textContent = timer;
      timer--;
    } else {
      clearInterval(interval);
      bubbleValue.textContent = `Game Over! Your Score is : ${Score}`
     
    }
  }, 1000);
}

function Hitvalue() {
  Hit.textContent = Math.floor(Math.random() * 10);
}

let Score = 0;
function ScoreIncrease() {
  Score += 10;
  ScoreValue.textContent = Score;
  console.log("10")
}



bubbleValue.addEventListener("click",(dets) => {
  if(dets.target.textContent === Hit.textContent){
    ScoreIncrease();
    MakeBubble();
    Hitvalue(); 
  }
})

MakeBubble();
RunTimer();
Hitvalue();
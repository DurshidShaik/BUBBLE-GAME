const Hit = document.querySelector("#Hit");  // hit value
const Timerval = document.querySelector("#Timer");  // time INterval 
let ScoreValue = document.querySelector("#Score"); // Score Board
let bubbleValue = document.querySelector(".bubbletop"); // value in the bubble

function MakeBubble() {  // making the bubble in the web using js
  let box = "";
  for (let i = 0; i <= 90; i++) {
    box += `<div class="bubble" type="button">${Math.floor(    //using math function to genarate random numbers
      Math.random() * 10
    )}</div>`;
  }
  document.querySelector(".bubbletop").innerHTML = box;
}

let timer = 60;
function RunTimer() {      //run timer function 
  let interval = setInterval(() => {
    if (timer >= 0) {
      Timerval.textContent = timer;
      timer--;
    } else {
      clearInterval(interval);
      document.querySelector("#score").innerHTML = `Your Score Is :${Score}`;
      document.querySelector(".show-results").style.display = "block";
 
    }
  }, 1000);
}

function Hitvalue() {
  Hit.textContent = Math.floor(Math.random() * 10);   //generating Hit value
}

let Score = 0;
function ScoreIncrease() {   //adding the scores 
  Score += 10;
  ScoreValue.textContent = Score;
  console.log("10")
}



bubbleValue.addEventListener("click",(dets) => {    //if hit value and user hitted value mathces it will refresh the hit value and increases the score board by 10 points and refreshes the user values..
  if(dets.target.textContent === Hit.textContent){
    ScoreIncrease();
    MakeBubble();
    Hitvalue(); 
  }
})

document.querySelector(".play-again").addEventListener("click",()=>{
  document.querySelector(".show-results").style.display = "none";
  Score = 0;
  timer = 60;
  MakeBubble();
  RunTimer(); 
  Hitvalue(); 
})

MakeBubble();
RunTimer();
Hitvalue();

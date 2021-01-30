var wWidth = window.innerWidth;
var wHeight = window.innerHeight;

// function ready to start
button_header.onclick = function () {

  timerF(sec = 3, milSec = 99);
  mooveSmile();

};

// function for the calculated numbers of randomly within certain limits
function randomInteger(min, max) {
  // get a random number from (min-0.5) up to (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var intervalIdMove;

function mooveSmile() {
  // the function of moving the smile 2 seconds after hovering over it
  document.getElementById("smile").onmouseover = function (e) {
    // 1. track the hover on the smile
    intervalIdMove = setTimeout(function () {
      moveAt(e);
    }, 700); // through this time after pointing object moves
  };
}

function moveAt(e) {
  var screen = document.getElementById("screen");
  smile.style.left = randomInteger(1, screen.clientWidth - smile.clientWidth) + "px";
  smile.style.top = randomInteger(1, screen.clientHeight - smile.clientWidth) + "px";
}

var intervalIdTimer; // should hang here because it is used by the stop function
// function timer

function timerF(sec = 3, milSec = 99) {
  timer = document.getElementById("timer");

  intervalIdTimer = setInterval(function () {
    milSec--;

    if (sec == 0 && milSec == 0) {
      clearInterval(intervalIdTimer);
      alert("time out");
    }
    if (milSec == 0 && sec > 0) {
      sec--;
      milSec = 99;
    }
    if (sec <= 10) {
      timer.style.color = "red";
    }
    if (milSec < 10 && sec < 10) {
      timer.innerText = "0" + sec + " : " + "0" + milSec;
    }
    if (milSec >= 10 && sec < 10) {
      timer.innerText = "0" + sec + " : " + milSec;
    }
    if (milSec < 10 && sec >= 10) {
      timer.innerText = sec + " : " + "0" + milSec;
    }
    if (milSec >= 10 && sec >= 10) {
      timer.innerText = sec + " : " + milSec;
    }
  }, 10);
}


// counting clicks on and past a goal
 
var scoreSum = 0; 
var numberOfLevel = 1;
 
pointsToNextLevel = 10; // points to Next Level
var countMisses = 1; //a counter of misses

document.getElementById("smile").onclick = function myFunction(e) {

  scoreSum = scoreSum + numberOfLevel * 10;
  pointsToNextLevel--; //reducing the number of clicks to the next level

  if (pointsToNextLevel == 0) {
    //raising the level
    pointsToNextLevel = 10;
    numberOfLevel++;
  }

  scoreSum = scoreSum + numberOfLevel;
  document.getElementById("scoreN").innerText = scoreSum;
  document.getElementById("levelN").innerText = numberOfLevel;
  document.getElementById("pnl").innerText = pointsToNextLevel;
  countMisses--;
};


document.getElementById("screen").onclick = function () {
  missN.innerText = countMisses++;
  scoreSum = scoreSum - numberOfLevel;
  scoreN.innerText = scoreSum;
};
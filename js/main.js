function start() {
  timerF();
  summClick();
  mooveSmile();
}

// function ready to start
button_header.onclick = function () {
  // var isStart222 = confirm("Lets Start ?");
  // if (isStart222 == true) {
  start();
  // }
};

// function for the calculated numbers of randomly within certain limits
function randomInteger(min, max) {
  // get a random number from (min-0.5) up to (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function mooveSmile() {
  var smile = document.getElementById("smile");
  // the function of moving the smile 2 seconds after hovering over it
  smile.onmouseover = function (e) {
    // 1. track the hover on the smile
    intervalID = setTimeout(function () {
      smile.style.position = "absolute";
      moveAt(e);

      function moveAt(e) {
        var screen = document.getElementById("screen");

        smile.style.left =
          randomInteger(1, screen.clientWidth - smile.clientWidth) + "px";
        smile.style.top =
          randomInteger(1, screen.clientHeight - smile.clientWidth) + "px";
      }
    }, 700);    // through this time after pointing object moves
  };
}

var intervalID; // should hang here because it is used by the stop function
// function timer

var milSec = 99;
var sec = 3;

function timerF() {
  timer = document.getElementById("timer");

  intervalID = setInterval(function () {
    milSec--;

    if ((sec == 0) && (milSec == 0)) {
     stop()
    }

    if ((milSec == 0) &&(sec > 0)) {
      sec--;
      milSec = 99;
    }

    if (sec <= 10) {
      timer.style.color = "red";
    }

    if ((milSec < 10) &&(sec < 10)) {
      timer.innerText = "0" + sec + " : " + "0" + milSec;
    }

    if ((milSec >= 10) &&(sec < 10)) {
      timer.innerText = "0" + sec + " : " + milSec;
    }

    if ((milSec < 10) &&(sec >= 10)) {
      timer.innerText = sec + " : " + "0" + milSec;
    }

    if ((milSec >= 10) &&(sec >= 10)) {
      timer.innerText = sec + " : " + milSec;
    }
  }, 10);

  
}

function stop() {
    clearInterval(intervalID);
    alert("time out");
}


// counting clicks on and past a goal
function summClick() {
  var scoreN = document.getElementById("scoreN");
  var scoreSum = 0;
  // var inc = 0;
  var levelN = document.getElementById("levelN");
  var levelNel = 1;
  var pnl = document.getElementById("pnl");
  pnlE = 10; // points to Next Level

  smile.onclick = function myFunction(e) {
    //hit counter

        // smile.style.position = "absolute";
        // moveAt(e);
  
        // function moveAt(e) {
        //   var screen = document.getElementById("screen");
  
        //   smile.style.left =
        //     randomInteger(1, screen.clientWidth - smile.clientWidth) + "px";
        //   smile.style.top =
        //     randomInteger(1, screen.clientHeight - smile.clientWidth) + "px";
        // }
      

    scoreSum = scoreSum + levelNel * 10;
    pnlE--; //reducing the number of clicks to the next level

    if (pnlE == 0) {
      //raising the level
      pnlE = 10;
      levelNel++;
    }

    scoreSum = scoreSum + levelNel;
    scoreN.innerText = scoreSum;
    levelN.innerText = levelNel;
    pnl.innerText = pnlE;
    inc2--;
  };

  var inc2 = 1; //a counter of misses
  screen.onclick = function () {
    missN.innerText = inc2++;

    scoreSum = scoreSum - levelNel;
    scoreN.innerText = scoreSum;
  };
}

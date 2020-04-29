function start() {
  timerF();
  summClick();
  mooveSmile();
}

// функция запроса на старт
wapka.onclick = function () {
  // var isStart222 = confirm("Lets Start ?");
  // if (isStart222 == true) {
  start();
  // }
};


// функция для вычесления рандомного числа в заданных границах
function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function mooveSmile() {
  var smile = document.getElementById('smile');
  // функция перемещения смайла через 2секунды после наведения на него 
  smile.onmouseover = function (e) { // 1. отследить наведение на смайл
    intervalID = setTimeout(function () {
      smile.style.position = 'absolute';
      moveAt(e);

      function moveAt(e) {
        var ekran = document.getElementById('ekran');

        smile.style.left = randomInteger(1, ekran.clientWidth - smile.clientWidth) + 'px';
        smile.style.top = randomInteger(1, ekran.clientHeight - smile.clientWidth) + 'px';

      }
    }, 2000)
  }
}



var intervalID; // должна висеть тут ибо ее использует функция stop
// функция таймер


var milSec = 99;
var sec = 19;

function timerF() {



  timer = document.getElementById('timer');

  intervalID = setInterval(function () {

    milSec--;

    if (sec == 0 & milSec == 0) {
      alert("time out");
      clearInterval(intervalID);
    };

    // if ((milSec == 0 & Sec !== 0)) {
    if (milSec == 0 & sec > 0) {
      sec--;

      milSec = 99;
    };

    if (sec <= 10) {
      timer.style.color = "red";
    };

    if (milSec < 10 & sec < 10) {
      timer.innerText = "0" + sec + " : " + "0" + milSec
    };

    if (milSec >= 10 & sec < 10) {
      timer.innerText = "0" + sec + " : " + milSec
    };

    if (milSec < 10 & sec >= 10) {
      timer.innerText = sec + " : " + "0" + milSec
    };

    if (milSec >= 10 & sec >= 10) {
      timer.innerText = sec + " : " + milSec
    };

  

  }, 10);



}



// подсчет кликов по цели и мимо
function summClick() {
  var scoreN = document.getElementById('scoreN');
  var scoreSum = 0;
  // var inc = 0;
  var levelN = document.getElementById('levelN');
  var levelNel = 1;
  var pnl = document.getElementById('pnl');
  pnlE = 10; // points to Next Level

  smile.onclick = function myFunction() { //счетчик попаданий

    scoreSum = scoreSum + (levelNel * 10);
    pnlE--; //уменьшаем количество кликов до след.уровня

    if (pnlE == 0) { //повышаем уровень
      pnlE = 10
      levelNel++;
    };

    scoreSum = scoreSum + levelNel;
    scoreN.innerText = scoreSum;
    levelN.innerText = levelNel;
    pnl.innerText = pnlE;
    inc2--;
  }
  var inc2 = 1; //счетчик промахов
  ekran.onclick = function myFunction2() {
    missN.innerText = inc2++;

    scoreSum = scoreSum - levelNel;
    scoreN.innerText = scoreSum;
  }
}
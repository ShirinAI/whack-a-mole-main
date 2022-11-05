const squares = document.querySelectorAll('.mole-not-active');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score')
const restart = document.getElementById('restart')

let result = 0;
let hitPosition;
let currentTime = 15;
let timerId = null;
let activeSquare;
let keyHit;

function restartTheGame(){
    if(currentTime > 0) {
    console.log('time is not 0')
    result = 0;
    score.textContent = result;
    currentTime = 16;
    countDown();
}else if(currentTime == 0){
        result = 0;
        score.textContent = result;
        currentTime = 16;
        randomSquare();
        moveMole();
        countDown();
        countDownTimerId = setInterval(countDown, 1000)
        console.log('time is 0')
 }
}

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    });
    activeSquare = squares[Math.floor(Math.random() * 9)]
    activeSquare.classList.add('mole');
    hitPosition = activeSquare.id
}

randomSquare();

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition){
            console.log(square.id)
        activeSquare.classList.remove('mole')
        result++;
        score.textContent = result;
        hitPosition = null;
    //}else if(square.id == "image+" + )){

    }else{
        console.log('miss')
    }
  })
})

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function moveMole() {
    timerId = setInterval(randomSquare, randomTime(500, 1000));
}

moveMole();

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime;
 if(currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId)
    alert("GAME OVER! Your final score is "+ result);
 }
}


let countDownTimerId = setInterval(countDown, 1000)
timeLeft.innerHTML = currentTime;


restart.addEventListener('click', restartTheGame)


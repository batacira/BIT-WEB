var mario = document.getElementById('mario');
var bg = document.getElementById('bg');
var positionX = 0;




var marioNeKlizi = function (e) {
    var key = e.key;
    if (key === 'ArrowRight') {
        mario.src = './assets/mario_running.gif';
        document.removeEventListener('keydown', marioNeKlizi);
    }
    else if (key === 'ArrowUp') {
        mario.style.bottom = '50%';
        mario.src = "./assets/mario.png";
    }
    else if (key === 'ArrowDown') {
        mario.style.top = '70%';
    }
    else {
        mario.src = './assets/mario.png';
    }
    console.log(e);
}

var backgroundSePomera = function (e) {
    var key = e.key;
    if(key === 'ArrowRight') {
        bg.style.backgroundPosition = positionX + 'px';
        positionX -= 17;
        }
    }
document.addEventListener('keydown', backgroundSePomera);

document.addEventListener('keydown', marioNeKlizi);



var onMoveRightHandler = function (e) {
    var key = e.key;
    if(key === 'ArrowRight'){
        mario.src = "./assets/mario.png";
        document.addEventListener('keydown', marioNeKlizi);
    }
}



document.addEventListener('keyup',onMoveRightHandler)

document.addEventListener('keyup', function (e) {
    var key = e.key;
    if(key === 'ArrowUp') {
        mario.style.bottom = '0%';

    }
})


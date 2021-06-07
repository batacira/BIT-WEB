var mario = document.getElementById('mario');


document.addEventListener('keydown', function (e) {
    var key = e.key;
    if (key === 'ArrowRight') {
        mario.src = './assets/mario_running.gif'
    }
    else if(key === 'ArrowUp') {
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
})


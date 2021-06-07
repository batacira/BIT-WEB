var inputNode = document.querySelector('input');
var isOn = true;
var toggleButton = document.getElementById('toggleButton');

var changeBackground = function () {
    var parentNode = document.getElementById('id-1');
    console.log(parentNode);
    parentNode.classList.toggle('plav');
}

var handler = changeBackground;

var turnOffhandler = function () {
    if(!isOn) {
        handler = changeBackground;
        toggleButton.textContent = 'Turn off';
        isOn = true;
    }
    else {
        handler = null;
        toggleButton.textContent = 'Turn on';
        isOn = false;
        inputNode.disabled = false;
    }
}



















// var input =  document.querySelector('input');

// function handler1() {
//     var div = document.getElementById('id-1')
//     div.classList.toggle('plav');
    
// }


// div.addEventListener('click', handler1)
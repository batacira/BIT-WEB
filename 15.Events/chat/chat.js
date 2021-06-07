var msgs = document.getElementById('msgs');
var inputText = document.getElementById('inputText');
var btnSend = document.getElementById('btnSend');

function msgSend() {
    var text = inputText.value;
    var para = document.createElement('p');
    para.textContent = text;
    msgs.appendChild(para);
    inputText.value = '';
}

document.addEventListener('keydown', function (e) {
    var key = e.key;
    if (key === 'Enter') {
        key === msgSend();
    }
})


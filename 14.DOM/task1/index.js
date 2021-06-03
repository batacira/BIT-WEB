function seconList() {
    var ul2 = document.getElementById('second');
    ul2.style.backgroundColor = 'red'; 

    return ul2;
}

seconList();


function selAllLiElem() {
    var liEleme = document.querySelectorAll('li');
    liEleme.forEach(function (element) {
        element.style.backgroundColor = 'blue';
    });

}
selAllLiElem();


function sellectThirdLiElements() {
    var thirdLiElements = document.querySelectorAll('.third');
    thirdLiElements.forEach(function (el) {
        el.style.backgroundColor = 'red';
        document.querySelector('.third');
        
    });

}
sellectThirdLiElements();

function secondList(params) {
    
}
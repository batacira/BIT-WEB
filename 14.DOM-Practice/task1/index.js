
function secondList() {
    var ul2 = document.getElementById('zeleno');
    ul2.style.backgroundColor = 'green';
}

secondList();


function changeAllLi() {
    var allLi = document.querySelectorAll('li'); //Nije radilo sa getElementTagName
    allLi.forEach(function (element) {
        element.style.backgroundColor = 'orange';
    })
}

changeAllLi();


function lastUl() {
    var ul = document.querySelectorAll('.crveno');
    ul.forEach(function (element) {
        element.style.backgroundColor = 'red';
    })
    document.getElementById('upper').style.textTransform = "upperCase";
}

lastUl();
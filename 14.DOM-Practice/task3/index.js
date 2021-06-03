// function alertText() {
//     var query = document.querySelector('li').textContent = 'Ovo je uzbuna';
//     alert(query);
// }

// alertText();

// Access/Update Text Node
// Create an unordered list containing <li> items that represent navigation.

// Create a function that takes text from one of the <li> elements and presents it on screen using alert.

function alertEl() {
    var ulList = document.querySelector('ul');
    var third = ulList.querySelector('ul>li:nth-of-type(3)') //Css sintaksa
    alert(third.textContent);
}
alertEl();

// Create one more function.
// The function should take some text as an argument.
// The function should select the last <li> element in the list and replace its text with text passed as the function argument.

function replaceText(textArg) {
    var ulEl = document.querySelector('ul');
    var lastLi = ulEl.firstElementChild;
    console.log(lastLi);
    var newText = lastLi.textContent = textArg;
}
replaceText('Tekst je promenjen');
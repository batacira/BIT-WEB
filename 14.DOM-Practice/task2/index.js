function removingClass() {
    var active = document.querySelector('.active');
    active.classList.remove('active');
    var a = active.parentElement.parentElement.previousElementSibling.firstElementChild;

    var a = a.firstElementChild.classList.add('active')
}

removingClass();

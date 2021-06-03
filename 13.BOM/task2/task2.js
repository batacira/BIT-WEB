function getPlatform() {
    console.log(window.navigator.platform);
}

getPlatform();

function getBrowserVersion() {
    console.log(window.navigator.userAgent);

}
getBrowserVersion();

function getCompany() {
    console.log(window.navigator.vendor);
}

getCompany();

function isOnline() {
    if(window.navigator.onLine) {
        console.log("Online");
    }
    else {
        console.log("Offline");
    }
}

isOnline();

function windowScreen() {
    console.log("Sirina: " + window.screen.width);
    console.log("Visina: " + window.screen.height);
    console.log("Maksimalna visina: " + window.screen.availHeight);
}

windowScreen();


function windowLocation() {
    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.pathname);
}

windowLocation();

// window.location.reload();

// window.location.replace('https://www.google.rs/'); 

function saveItem() {
    window.localStorage.setItem('Ime', 'Milos');
    if(!window.localStorage.getItem('Ime')) {
        console.log('No data');
    }
    else {
        console.log(window.localStorage.getItem('Ime'));
    }
    window.localStorage.removeItem('Ime'); //Posebna funkcija
}

saveItem();

// function history() {
//     window.history.back();
// }

// history();

function greeting() {
    window.alert('Pozdrav care');
    var prompt = window.prompt('Da li imate 18 godina ?');
    if(window.confirm('We will submit this answer now!' + prompt)){
        window.alert('Success message');
    }
    else {
        false;
    }
}

greeting();


function random() {
    var emptyArray = [];
    for(var i = 0; i < 10; i++) {
        var ran = Math.floor(Math.random() * 50) + 1;
        emptyArray[emptyArray.length] = ran;
    }
    return emptyArray;
}

console.log(random()); 



var array1 = [1.85784, 55.12345, 13.6784, 5.3333];

function roundedDecimal(params) {

    var rounded = params.map(function (num) {
        return Math.round(num * 100) / 100;
    });

    console.log(rounded);
};
roundedDecimal(array1);



function round(para) {
    var round = para.map(function (num) {
        return Math.round(num);
    })
    console.log(round);
}

round(array1);


function biggest(array) {
    console.log(Math.max(...array));
}

biggest([1.85784, 55.12345, 13.6784, 5.3333]
);

function date() {
    console.log(Date());
}

date();

function curentTime() {
    var date = new Date();
    console.log(date.toLocaleTimeString());
    console.log(date.toLocaleDateString());
}

curentTime();

var message2 = 'Druga poruka na ekranu';
document.write(message2);

function onInit() {
    var message = 'Prva poruka';
    console.log(message);
}

onInit();

function getPlatform() {
    console.log('platform: ' + (window.navigator.platform));
}

getPlatform();

function informationBrowserVersion() {
    console.log('Information Browser Version: ' + (window.navigator.appVersion));
}

informationBrowserVersion();
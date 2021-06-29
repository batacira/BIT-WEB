var $body = $('body');
var $divContainer = $('<div>').css({
    'width': '920px',
    'margin': '0 auto'
});
$body.append($divContainer);

var $arrayLinks = ['https://images.pexels.com/photos/4319752/pexels-photo-4319752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/4755029/pexels-photo-4755029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'];
var $border = true;
$.each($arrayLinks, (function (index) {
    var $size = Math.round(300 * Math.random() + 100);
    var img = $('<img>').attr('src', $arrayLinks[index]).css({
        'width': $size,
        'height': $size,
        'object-fit': 'cover'
    });
    $divContainer.append(img);
    if ($size < 200 && $border) {
        img.css({
            "border": "3px solid green"
        })
        $border = false;
    }

}))

var $galeryTittle = $('<h1>').text('Amazing Gallery').css({
    'color': 'green',
    'font-family': 'Arial',
    'font-weight': 'bold',
    'text-align': 'center'
});
$divContainer.prepend($galeryTittle);


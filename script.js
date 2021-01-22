function ageInDays() {
    var birthyr = prompt('when were u born ?');
    var ageInDayss = 2020 - birthyr;
    ageInDayss *= 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

function generatePinneaple() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-pin-gen');
    image.src = "https://www.gifmania.co.uk/Food-Animated-Gifs/Animated-Fruits/Pineapples/Pineapple-Rotating-87252.gif";
    div.appendChild(image);
}
var el;

function charCount(e) {
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersleft');
    counter = (180 - (textEnter.length));
    charDisplay.textContent = counter;
    lastkey = document.getElementById('lastkey');
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;
}
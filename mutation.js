var elList, addLink, newEl, newText, counter, ListItem;

elList = document.getElementById('List');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function addItem(e) {
    e.prevenDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('New list item')
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount() {
    listItem = elList.getElementsByTagName('li').length;
    counter.innerHTML = ListItem;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);
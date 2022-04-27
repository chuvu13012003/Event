function checkUsername() {
    var username = el.value;
    if (username.length < 5) {
        elMsg.className = 'warning';
        el.Msg.textContent = 'Not long enough, yet...';
    } else {
        elMsg.textContent = '';
    }
}

function tipUsername() {
    elMsg.className = 'tip';
    elMsg.innerHTML = 'User name must be least 5 characters';
}

var sl = document.getElementById('username');
var elMsg = document.getElementById('feedback');
el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);

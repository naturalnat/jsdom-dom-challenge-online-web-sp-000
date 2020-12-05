let seconds = document.getElementById('counter').value;
const counter = setInterval(countSeconds, 1000);

function countSeconds() {
    seconds += 1;
}

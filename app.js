const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

setInterval(updateClock, 50);

function updateClock() {
    let date = new Date();
    let mil = date.getMilliseconds() / 1000;
    let sec = (date.getSeconds() + mil) / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;

    // console.log(`hour:${hour} min:${min} sec:${sec} mil:${mil}`)

    secDiv.style.transform = 'rotate('+ (sec * 360) + 'deg)';
    minDiv.style.transform = 'rotate('+ (min * 360) + 'deg)';
    hourDiv.style.transform = 'rotate('+ (hour * 360) + 'deg)';
}

updateClock();

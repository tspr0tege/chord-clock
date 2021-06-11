const {bpm, notes} = JSON.parse(sessionStorage.getItem('sessionClock'));
const clock = document.getElementById('clock');
const handDiv = document.getElementById('hand');
const noteRotationTime = 60000 / bpm;
const fullRotationTime = noteRotationTime * notes.length;
let pos = 0;

(function renderClock() {
  const segments = 360 / notes.length;

  // console.log(notes);


  for (let i = 0; i < notes.length; i++) {
    let rotation = segments * (i+1);

    let div = document.createElement('div');
    div.classList.add('number');
    div.style.cssText = 'transform: rotate(' + rotation + 'deg);';

    if (notes[i]) {
      let innerDiv = document.createElement('div');
      innerDiv.innerText = notes[i];
      innerDiv.classList.add('note-text');
      innerDiv.style.cssText = 'transform: rotate(-' + rotation + 'deg);';
  
      div.appendChild(innerDiv);
    }
    clock.appendChild(div);
  }

})();

let start = Date.now();
setInterval(updateClock, 30);

function updateClock() {
    let currentTime = Date.now();
    let elapsedTime = currentTime - start;

    if (elapsedTime > fullRotationTime) {
      start += fullRotationTime;
    }
    let pos = elapsedTime / fullRotationTime;
    // console.log(elapsedTime > fullRotationTime);

    handDiv.style.transform = 'rotate('+ (pos * 360) + 'deg)';
}

updateClock();

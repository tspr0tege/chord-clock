(function renderClock() {
  const {bpm, notes} = JSON.parse(sessionStorage.getItem('sessionClock'))
  // const notes = JSON.parse(sessionStorage.getItem('sessionClock'));
  const clock = document.getElementById('clock');
  const segments = 360 / notes.length;

  console.log(notes);


  for (let i = 0; i < notes.notes.length; i++) {
    let rotation = segments * (i+1);

    let div = document.createElement('div');
    div.classList.add('number');
    div.style.cssText = 'transform: rotate(' + rotation + 'deg);';

    if (notes[i]) {
      let innerDiv = document.createElement('div');
      innerDiv.innerText = notes[i];
      innerDiv.style.cssText = 'transform: rotate(-' + rotation + 'deg);';
  
      div.appendChild(innerDiv);
    }

    clock.appendChild(div);
  }

})();


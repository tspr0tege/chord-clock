const notesList = document.getElementById('notes-list');
const form = document.getElementById('form');

form.addEventListener('submit', createSession);

function createSession(e) {
  e.preventDefault();
  // console.log(e.target.elements);
  let formData = e.target.elements;
  let sessionClock = {
    bpm: formData[0].value,
    notes: []
  };
  
  for (let i = 1; i < formData.length - 2; i++) {
    if (i % 2 !== 0){
      sessionClock.notes.push(formData[i].value);
    } else {
      for (let j = 1; j < formData[i].value; j++){
        sessionClock.notes.push(0);
      }
    }
  }

  sessionStorage.setItem('sessionClock', JSON.stringify(sessionClock));
  location.href = './chordClock.html'
}

function addNote() {
  
  let newDiv = document.createElement('div');
  newDiv.classList.add('chord-input-div');
  
  let text = document.createElement('input');
  text.setAttribute('type', 'text');
  text.setAttribute('placeholder', 'Enter a note');
  
  let number = document.createElement('input');
  number.setAttribute('type', 'number');
  number.setAttribute('min', '1');
  number.setAttribute('max', '16');
  number.setAttribute('value', '4');

  newDiv.appendChild(text);
  newDiv.appendChild(number);
  notesList.appendChild(newDiv);

}
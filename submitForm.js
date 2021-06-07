const notesList = document.getElementById('notes-list');
const form = document.getElementById('form');

form.addEventListener('submit', createSession);

function createSession(e) {
  e.preventDefault();
  console.log(e.target.elements[1].value);
}

function addNote() {
  
  let newDiv = document.createElement('div');
  
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
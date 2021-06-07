(function renderClock() {
  const numbers = [0,0,'3',0,0,'6',0,0,'9',0,0,'12'];
  // sessionStorage.getItem('key');
  const clock = document.getElementById('clock');
  const segments = 360 / numbers.length;

  for (let i = 0; i < numbers.length; i++) {
    let rotation = segments * (i+1);

    let div = document.createElement('div');
    div.classList.add('number');
    div.style.cssText = 'transform: rotate(' + rotation + 'deg);';

    if (numbers[i]) {
      let innerDiv = document.createElement('div');
      innerDiv.innerText = numbers[i];
      innerDiv.style.cssText = 'transform: rotate(-' + rotation + 'deg);';
  
      div.appendChild(innerDiv);
    }

    clock.appendChild(div);
  }

})();


console.log('Hello!');

let body = document.querySelector('body');
// body.classList.add('light-mode');
changeMode('light-mode');

// indexedDB

function changeMode(mode) {
  if ((mode = 'light-mode')) body.classList.add(mode);
  else if ((mode = 'dark-mode')) body.classList.add(mode);
  else return;
}

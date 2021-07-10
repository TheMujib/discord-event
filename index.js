const subDiv = document.querySelector('.sub-div');
const joinBtn = document.querySelector('.join-btn');

setInterval(function () {
  clrChanger();
}, 3000);

function clrChanger() {
  let letters = '0123456789abcdef';
  let hash = '#';
  for (let i = 0; i < 10; i++) {
    hash += letters[Math.floor(Math.random() * letters.length)];
    subDiv.style.borderColor = hash;
    joinBtn.style.borderColor = hash;
  }

  return hash;
}

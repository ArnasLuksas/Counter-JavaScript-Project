let show = document.querySelector('.show');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const reset = document.querySelector('.reset');
const newNum = 0;

minus.addEventListener('click', () => {
  show.innerHTML = parseInt(show.innerHTML) - 1;
  if (show.innerHTML >= newNum) {
    show.className = 'green';
  } else if (show.innerHTML <= newNum) {
    show.className = 'red';
  }
  if (show.innerHTML == newNum) {
    show.className = 'blue';
  }
});
plus.addEventListener('click', () => {
  show.innerHTML = parseInt(show.innerHTML) + 1;
  if (show.innerHTML == newNum) {
    show.className = 'blue';
  } else if (show.innerHTML > newNum) {
    show.className = 'green';
  }
});
reset.addEventListener('click', () => {
  show.className = 'blue';
  show.innerHTML = 0;
});

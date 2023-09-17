let timer = document.getElementById('timer');
timer.textContent = 5;
function doCountdown() {
  timer.textContent--;
  if (timer.textContent == 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
}
let intervalId = setInterval(doCountdown, 1000);

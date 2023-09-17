let deadCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');

function getHole(index) {
  let holeId = 'hole' + String(index);
  return document.getElementById(holeId);
}

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.onclick = function () {
    if (hole.classList.contains('hole_has-mole')) {
      deadCounter.textContent++;
    } else {
      lostCounter.textContent++;
    }
    if (deadCounter.textContent == 10) {
      alert('Вы выиграли!');
      deadCounter.textContent = 0;
      lostCounter.textContent = 0;
    } else if (lostCounter.textContent == 5) {
      alert('Вы проиграли!');
      deadCounter.textContent = 0;
      lostCounter.textContent = 0;
    }
  }
}



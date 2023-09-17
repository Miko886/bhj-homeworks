let clickerCounter = document.getElementById('clicker__counter');
let clickPicture = document.getElementById('cookie');
clickPicture.onclick = function() {
  clickerCounter.textContent++;
  if (clickPicture.width === 200) {
    clickPicture.width = 250;
  } else {
    clickPicture.width = 200;
  }
}
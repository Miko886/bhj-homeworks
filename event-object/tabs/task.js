let tabs = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.tab__content');
for (let i = 0; i < tabs.length; i++) {
  function click() {
    document.querySelector('.tab_active').classList.remove('tab_active');
    document.querySelector('.tab__content_active').classList.remove('tab__content_active');
    tabs[i].classList.add('tab_active');
    tabContents[i].classList.add('tab__content_active');
  }
tabs[i].addEventListener('click', click)
}
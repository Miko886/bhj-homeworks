let dropdown = document.querySelector('.dropdown');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItem = document.querySelectorAll('.dropdown__item');
let dropdownValue = document.querySelector('.dropdown__value');
let dropdownLink = document.querySelectorAll('.dropdown__link');


dropdown.addEventListener('click', () => dropdownList.classList.toggle('dropdown__list_active'));
dropdownLink.forEach((e) => e.onclick = function() {return false});

for (let item of dropdownItem) {
  let itemText = item.textContent;
  item.addEventListener('click', () => dropdownValue.textContent = itemText);
  }


const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__mobmenu');
const close = document.querySelector('.close');
const back = document.querySelector('.background');
const searchButton = document.querySelector('.search-header__button');
const searchInput = document.querySelector('.search-header__input');
const searchMob = document.querySelector('.header__search');
const searchMobInput = document.querySelector('.search-mobmenu__input');

let keys = {
  ESC: 27,
};

function showMenu() {
  menu.classList.add('mobmenu--showed');
  back.classList.add('background--showed');
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == keys.ESC) {
      closeMenu();
    }
  });

}

function showInput () {
  let style = window.getComputedStyle(searchInput);
  let display = style.getPropertyValue('display');
  if (display == 'none') {
    searchInput.classList.add('search-header__input--showed');
  }
}

function showMobInput () {
  let style = window.getComputedStyle(searchMobInput);
  let display = style.getPropertyValue('display');
  if (display == 'none') {
    searchMobInput.classList.add('search-mobmenu__input--showed');
  }
}

function closeMenu() {
  menu.classList.remove('mobmenu--showed');
  back.classList.remove('background--showed');
}

searchButton.addEventListener('click', showInput);
searchMob.addEventListener('click', showMobInput);

burger.addEventListener('click', showMenu);

close.addEventListener('click', closeMenu);

back.addEventListener('click', closeMenu);

document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !searchButton.contains(e.target)) {
    searchInput.classList.remove('search-header__input--showed');
  }
});

document.addEventListener('click', (e) => {
  if (!searchMobInput.contains(e.target) && !searchMob.contains(e.target)) {
    searchMobInput.classList.remove('search-mobmenu__input--showed');
  }
});

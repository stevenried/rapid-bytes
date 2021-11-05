const burger = document.getElementsByClassName('burger')[0];
const menuLinks = document.getElementsByClassName('menu-links')[0];

burger.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});

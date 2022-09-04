const burgerBtn = document.querySelector('[data-id="burger"]')
const navMenu = document.querySelector('[data-id="nav"]')

burgerBtn.addEventListener('click', toggleNav)

function toggleNav() {
  navMenu.classList.toggle('toggle-display')
}

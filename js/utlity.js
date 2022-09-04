const copyrightYear = document.querySelector('[data-id="current-year"]')
const currentYear = setCurrentYear()

copyrightYear.innerText = `${currentYear}`

function setCurrentYear() {
  return new Date().getFullYear()
}

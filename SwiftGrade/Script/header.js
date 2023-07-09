const ToggleBtn = document.querySelector('.hamburger_menu')
const ToggleBtnIcon = document.querySelector('.hamburger_menu i')
const dropDownMenu = document.querySelector('.dropdown')

ToggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

ToggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

const ToggleSettings = document.querySelector('.settings-menu')
const dropDownSettings = document.querySelector('.settings-dropdown')

ToggleSettings.onclick = function (){
    dropDownSettings.classList.toggle('open')
}
const menuIcon = document.querySelector('.menu > i')
const header = document.querySelector('.header')
const popupMenu = document.querySelector(".popup-menu")
const closeMenu = document.querySelector('.close > i')
const filterEle = document.querySelector('.filter')
const popupFilter = document.querySelector('.popup-filter')
const avatarEl = document.querySelector('.profile img')
const accountEl = document.querySelector('.account')

// bật tắt menu
menuIcon.addEventListener("click", function () {
    popupMenu.style.display = 'block'
    menuIcon.style.display = 'none'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener("click", function () {
    popupMenu.style.display = 'none'
    menuIcon.style.display = 'block'
    closeMenu.style.display = 'none'
})

// bật tắt filter
filterEle.addEventListener('click', function() {
    popupFilter.classList.toggle("toggle-filter")
})

// bật tắt account
avatarEl.addEventListener('click', function() {
    accountEl.classList.toggle('toggle-account')
})


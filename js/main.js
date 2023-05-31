const menutoggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('nav ul')

menutoggle.addEventListener('click', function () { nav.classList.toggle('slide') })
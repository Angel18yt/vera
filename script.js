/*menu*/
const navMenu = document.getElementById('nav-menu'),
      navToglle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToglle) {
    navToglle.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*remove menu mobile*/
const navLink =document.querySelectorAll('.navLink')

function LinkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', LinkAction)) 


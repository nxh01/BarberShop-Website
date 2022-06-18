const navbarMenu = document.querySelector('.navbar')
const navCollapse = document.querySelector('.nav__collapse')
const navClose = document.querySelector('.nav__close')
const navLinks = document.querySelectorAll('.nav__links')
const navButtonBookNow = document.querySelector('.nav__btn')
const header = document.querySelector('.header')

// Navbar menu Click event listener, when any of the navbar buttons are clicked, navbar menu is closed
navCollapse.addEventListener('click', () => {
    navbarMenu.classList.add('show-nav')
    document.body.style.overflow = 'hidden'
})
navClose.addEventListener('click', () => {
    navbarMenu.classList.remove('show-nav')
    document.body.style.overflow = ''
})
navButtonBookNow.addEventListener('click', () => {
    navbarMenu.classList.remove('show-nav')
    document.body.style.overflow = ''
})

navLinks.forEach(element => {
    element.addEventListener('click', () => {
        navbarMenu.classList.remove('show-nav')
        document.body.style.overflow = ''
    })
});


// Sticky Navbar
window.addEventListener("scroll", function () {
    header.classList.toggle("scroll-header", window.scrollY > 0);
});

// Shopping Cart
const navCart = document.querySelector('.nav__cart')
navCart.addEventListener('click', () => {
    navbarMenu.classList.remove('show-nav')
    document.body.style.overflow = ''
})
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
const cartButton = document.querySelector('.nav__cart')
const cartContainer = document.querySelector('.cart')
const cartCloser = document.querySelector('.cart-close')

function cartShowDesktop(x) {
    if (x.matches) { // If media query matches
        document.body.style.overflow = 'visible'
    } else {
    }
}
var x = window.matchMedia("(min-width: 900px)")
cartShowDesktop(x)
x.addListener(cartShowDesktop)

cartButton.addEventListener('click', () => {
    navbarMenu.classList.remove('show-nav')
    cartContainer.classList.add('show-cart')
})
cartCloser.addEventListener('click', () => {
    navbarMenu.classList.add('show-nav')
    cartContainer.classList.remove('show-cart')
})


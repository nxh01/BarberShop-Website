// Button Click Effect
const Buttons = document.querySelectorAll('.btn')
Buttons.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('clicked-btn')
        setTimeout(() => {
            element.classList.remove('clicked-btn')
        }, 300)
    })
});


// Word Showcase animation, text moving left to right animation
const word1 = document.querySelector('.word-1')
const word2 = document.querySelector('.word-2')

window.onscroll = () => {
    let position = window.scrollY;
    console.log(position)
    word1.style.right = `${position}px`
    word2.style.left = position - 9000 + "px"
}
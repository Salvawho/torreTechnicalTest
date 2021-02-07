const btnHamburger = document.querySelector('#btnHamburger') 
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function(e) {
    console.log('Open Ham')

    if(header.classList.contains('open')){ // Close Hamburguer
        body.classList.remove('no-scroll')
        header.classList.remove('open')
        fadeElems.forEach(function(e) {
            e.classList.remove('fade-in')
            e.classList.add('fade-out')
        })
    } else { // Open Hamburguer
        body.classList.add('no-scroll')
        header.classList.add('open')
        fadeElems.forEach(function(e) {
            e.classList.remove('fade-out')
            e.classList.add('fade-in')
        })
    }

})
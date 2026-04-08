'use strict'

const slider = document.querySelector('.slider')
slider.onclick = nextSlide
const slideTimeout = 2400
let sliderTimerId = setTimeout(nextSlide, slideTimeout)

const images = slider.querySelectorAll('img')

function nextSlide() {
    clearInterval(sliderTimerId)

    // перемещаем просмотренный слайд в начало
    const movedSlide = slider.querySelector('.move-left')
    if (movedSlide) {
        movedSlide.classList.remove('move-left')
        movedSlide.remove()
        slider.prepend(movedSlide)
    }

    const images = slider.querySelectorAll('img')
    images[images.length - 1].classList.add('move-left')
    
    sliderTimerId = setTimeout(nextSlide, slideTimeout)   
}
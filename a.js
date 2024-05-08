const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const image = document.querySelectorAll('.image')
const bottom = document.querySelector('.bottom')
//Chuyển slide
let imgLength = image.length
let slideNumber = 1

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`
    slideNumber++
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`
    slideNumber--
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`
    slideNumber = 1
}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(imgLength - 1) * 800}px)`;
    slideNumber = imgLength;
};

right.addEventListener('click', () => {
    slideNumber < imgLength ? nextSlide() : getFirstSlide()
    resetBg()
    buttons[slideNumber - 1].style.backgroundColor = 'white'
})

left.addEventListener('click', () => {
    slideNumber > 1 ? prevSlide() : getLastSlide()
    resetBg()
    buttons[slideNumber - 1].style.backgroundColor = 'white'
})

for (let i = 0; i < imgLength; i++) {
    const div = document.createElement('div')
    div.className = 'button'
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = "white"

const resetBg = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'transparent'
    })
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        resetBg()
        slider.style.transform = `translateX(-${index * 800}px)`
        slideNumber = index + 1
        button.style.backgroundColor = "white"
    })
})

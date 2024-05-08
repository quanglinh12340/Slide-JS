const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const image = document.querySelectorAll('.image')
const bottom = document.querySelector('.bottom')
let slideNumber = 1
const imgLength = image.length

right.addEventListener('click', () => {
    if (slideNumber >= imgLength) {
        slider.style.transform = `translateX(0px)`
        slideNumber = 1
    } else {
        slider.style.transform = `translateX(-${slideNumber * 800}px)`
        slideNumber++
    }
    resetBtnBg()
    buttons[slideNumber - 1].style.backgroundColor = 'white'
    console.log("🚀 ~ right.addEventListener ~ slideNumber:", slideNumber)
})

left.addEventListener('click', () => {
    if (slideNumber > 1) {
        slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`
        slideNumber--
    } else {
        slider.style.transform = `translateX(-${(imgLength - 1) * 800}px)`
        slideNumber = imgLength
    }
    resetBtnBg()
    buttons[slideNumber - 1].style.backgroundColor = 'white'
})

for (let i = 0; i < imgLength; i++) {
    const div = document.createElement('div')
    div.className = 'button'
    bottom.appendChild(div)
}
const buttons = document.querySelectorAll('.button')
console.log("🚀 ~ buttons:", buttons)
buttons[0].style.backgroundColor = 'white'

const resetBtnBg = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent'
    })
}
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        resetBtnBg()
        slider.style.transform = `translateX(-${(index) * 800}px)`
        slideNumber = index + 1
        button.style.backgroundColor = 'white'
    })
})
const slider = document.querySelector('div.slider')
const images = Array.from(slider.querySelectorAll('div.slider__item'))
const navigation = Array.from(slider.querySelectorAll('div.slider__arrow'))
const dots = Array.from(slider.querySelectorAll('div.slider__dot'))


function indexChanger(max, current=0) {
    let currentIndex = current
    const obj = {
        change (next=false) {
            currentIndex = next ? (currentIndex == max ? 0: currentIndex + 1): (currentIndex == 0 ? max: currentIndex - 1)
            return currentIndex
        },
        get currentIndex() {return currentIndex},
        set currentIndex(value) {currentIndex = value}
    }
    return obj
}
imageChanger = indexChanger(images.length - 1, 0)


function dotsToggler(newDot, oldDot=undefined) {
    dots[typeof oldDot === 'number' ? oldDot: imageChanger.currentIndex].classList.remove('slider__dot_active')
    dots[newDot].classList.add('slider__dot_active')
}


dots.forEach((dot, index) => {
    dot.onclick = () => {
        dotsToggler(index)
        images[imageChanger.currentIndex].classList.remove('slider__item_active')
        images[index].classList.add('slider__item_active')
        imageChanger.currentIndex = index
        
    }
})


navigation.forEach((value, navigationIndex) => {
    value.onclick = () => {
        let oldIndex = imageChanger.currentIndex
        let currentIndex = imageChanger.change((navigationIndex + 1) % 2? false: true)
        dotsToggler(currentIndex, oldIndex)
        images[oldIndex].classList.remove('slider__item_active')
        images[currentIndex].classList.add('slider__item_active')
    }
})
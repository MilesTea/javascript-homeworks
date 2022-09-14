const blocks = Array.from(document.querySelectorAll('div.reveal'));

function isVisible(element) {
    const {top, bottom} = element.getBoundingClientRect();
    if(bottom < 0 || top > window.innerHeight) {
        return false
    } else {
        return true
    }
}

window.addEventListener('scroll', () => {
    blocks.forEach(element => {
        isVisible(element) ? element.classList.add('reveal_active') : element.classList.remove('reveal_active')
    });
});
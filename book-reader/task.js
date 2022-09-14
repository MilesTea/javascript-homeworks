navi = document.querySelector('div.book__control')

fonts = Array.from(navi.querySelectorAll('a.font-size'))

content = document.querySelector('div.book')

let lastFontSize = 1
fonts.forEach((font, index) => {
    font.addEventListener('click', (e) => {
        let fontSize = font.getAttribute('data-size')
        content.className = 'book'
        if(fontSize) {
            content.classList.add(`book_fs-${fontSize}`)
        }
        fonts[lastFontSize].classList.remove('font-size_active')
        lastFontSize = index
        fonts[index].classList.add('font-size_active')
        e.preventDefault()
    })
})
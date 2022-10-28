const editor = document.querySelector('#editor')
let text = window.localStorage.getItem('text')
if(text) {editor.value = text}
editor.addEventListener('keyup', () => {
    window.localStorage.setItem('text', editor.value)
})
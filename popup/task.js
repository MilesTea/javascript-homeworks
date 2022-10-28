const popup = document.getElementById('subscribe-modal')

const close = popup.querySelector('div.modal__close')
close.onclick = () => {
    popup.className = 'modal'
}

let isShowed = window.localStorage.getItem('popup_showed')
if(!isShowed) {
    setTimeout(() => {
        popup.className = 'modal modal_active'
        window.localStorage.setItem('popup_showed', '1')
    }, 2000)
}
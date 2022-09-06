const popup = document.getElementById('modal_main')
const popup_new = document.getElementById('modal_success')

setTimeout(() => {
    popup.className = 'modal modal_active'
}, 2000)

const close = document.querySelector('div#modal_main div.modal__close')
close.onclick = () => {
    popup.className = 'modal'
}

const btn = document.querySelector('a.btn.btn_danger')

const close_new = document.querySelector('div#modal_success div.modal__close')
btn.onclick = () => {
    popup.className = 'modal'
    popup_new.className = 'modal modal_active'
}

close_new.onclick = () => {
    popup_new.className = 'modal'
}
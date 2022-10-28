const button = document.querySelector('#signin__btn')
const welcome = document.querySelector('#welcome')
const blankWelcome = welcome.textContent

function loginCompleted(user_id) {
    welcome.textContent = blankWelcome + user_id
    welcome.classList.add('welcome_active')
    window.localStorage.setItem('user_id', user_id)
}
let userId = window.localStorage.getItem('user_id')
if(userId) {loginCompleted(userId)}

button.addEventListener('click', e => {
    e.preventDefault()
    let form = new FormData(document.forms.signin__form)
    let xhr = new XMLHttpRequest()
    xhr.responseType = 'json'
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')
    xhr.addEventListener('loadend', () => {
        if(xhr.response.success) {
            loginCompleted(xhr.response.user_id)
        }
        console.log(xhr)
    })
    xhr.send(form)
})


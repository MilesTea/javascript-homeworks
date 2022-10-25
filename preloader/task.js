const loader = document.querySelector('#loader')
const items = document.querySelector('#items')
let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com')
xhr.responseType = 'json'
xhr.addEventListener('loadend', () => {
    let arr = Object.entries(xhr.response.response.Valute)
    arr.forEach(valute => {
        items.insertAdjacentHTML('beforeend', `
            <div class="item">
                <div class="item__code">
                    ${valute[1].CharCode}
                </div>
                <div class="item__value">
                    ${valute[1].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>
        `)
    })
    loader.classList.remove('loader_active')
})
xhr.send()

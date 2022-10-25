const pollTitle = document.querySelector('#poll__title')
const pollAnswers = document.querySelector('#poll__answers')
let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')
xhr.responseType = 'json'
xhr.addEventListener('loadend', () => {
    pollTitle.textContent = xhr.response.data.title
    xhr.response.data.answers.forEach(answer => {
        pollAnswers.insertAdjacentHTML('beforeend', `
        <button class="poll__answer">
            ${answer}
        </button>
        `)
    });
})
xhr.send()
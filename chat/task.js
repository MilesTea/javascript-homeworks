const widget = document.querySelector('div.chat-widget')
const messages = document.getElementById('chat-widget__messages')
const input = document.getElementById('chat-widget__input')
let timeout = ''

timeoutMessagerObject = {
    timeout: '',
    timeoutMessager() {
        clearTimeout(timeout)
        timeout = setTimeout(() => {sendMessage('Вы всё ещё тут?', false)}, 30000)
    }
}
timeoutMessager = timeoutMessagerObject.timeoutMessager


function composeMessage(date, text, fromUser = true) {
    return `
    <div class="message${fromUser ? ' message_client' : ''}">
        <div class="message__time">${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}</div>
        <div class="message__text">
        ${text}
        </div>
    </div>
    `
}

function sendMessage(text, fromUser = true) {
    messages.innerHTML += composeMessage(new Date(), text, fromUser)
    messages.scrollIntoView({block: "end"});
}

replies = {
    repliesList: ['random reply 1', 'random reply 2', 'random reply 3'],
    getRandomReply() {
        return this.repliesList[Math.floor(Math.random() * this.repliesList.length)];
    }
}


widget.addEventListener('click', () => {
    widget.classList.add('chat-widget_active')
    timeoutMessager()
})


input.addEventListener('keydown', (e) => {
    if(!e.repeat && e.key == 'Enter') {
        timeoutMessager()
        sendMessage(input.value)
        input.value = ''
        sendMessage(replies.getRandomReply(), false)
    }    
})
const list = document.querySelector('div.tasks__list')
const form = document.querySelector('form#tasks__form')
const formInput = form.querySelector('input.tasks__input')
const formSubmit = form.querySelector('button.tasks__add')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    let task = document.createElement('div')
    task.className = 'task'
    list.appendChild(task)

    let taskText = document.createElement('div')
    taskText.textContent = formInput.value
    taskText.className = 'task__title'
    task.appendChild(taskText)

    let taskClose = document.createElement('a')
    taskClose.textContent = '\u00d7'
    taskClose.className = 'task__remove'
    task.appendChild(taskClose)
    taskClose.addEventListener('click', () => {task.remove()})
    form.reset()
})
const progress = document.getElementById( 'progress' );
document.forms.form.addEventListener('submit', event => {
    event.preventDefault()
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php')
    xhr.responseType = 'json'
    xhr.upload.addEventListener('progress', (event) => {
        progress.value = event.loaded / event.total
    })
    const formData = new FormData(document.forms.form)
    xhr.send(formData)
})

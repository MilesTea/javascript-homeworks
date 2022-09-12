const dropdown = document.querySelector('ul.dropdown__list');
const button = document.querySelector('div.dropdown');
const dropdownValue = document.querySelector('div.dropdown__value')

dropdownValue.addEventListener('click', (e) => {
    if(!dropdown.className.includes('dropdown__list_active')) {
        dropdown.classList.add('dropdown__list_active')
    } else {
        dropdown.classList.remove('dropdown__list_active')
    }
})


const elements = Array.from(dropdown.querySelectorAll('li.dropdown__item'))
elements.forEach(element => {
    let link = element.querySelector('a.dropdown__link');
    link.addEventListener('click', (e) => {
        dropdown.classList.remove('dropdown__list_active');
        dropdownValue.textContent = link.textContent;
        e.preventDefault()
    })
});
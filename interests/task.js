const interestsDiv = document.querySelector('div.interests.interests_main')
const interestsTab = interestsDiv.children[0]
const interests = interestsTab.children
// const allInterests = findChilds(interestsDiv)
// console.log(interestsTab)

const innerInterests = findChilds(interestsDiv)
const allInterests = Array.from(interests).concat(innerInterests)
console.log(allInterests)


function findChilds(interest) {
    console.log(interest)
    let interests = Array.from(interest.querySelectorAll('ul.interests > li.interest'))
    interests.forEach((interest) => {
        interests.concat(findChilds(interest))
    })
    return interests
}

function toggleInterests(interest, state=true) {
    // const interests = interest.querySelectorAll('ul.interests > li.interest')
    const interests = findChilds(interest)
    const checkbox = interest.querySelector('label > input')
    checkbox.checked = state

    interests.forEach(element => {
        console.log(element.parentElement.parentElement)
        const checkbox = element.querySelector('label > input')
        checkbox.checked = state
    })
};

allInterests.forEach(interest => {
    const checkbox = interest.querySelector('label > input')
    checkbox.addEventListener('change', () => {
        toggleInterests(interest, checkbox.checked)
    })
})
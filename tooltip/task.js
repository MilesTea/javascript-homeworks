const tooltipElements = Array.from(document.querySelectorAll('a.has-tooltip'))

tooltipElements.forEach(element => {

    let tooltip = document.createElement('div')
    let pos = element.getBoundingClientRect();
    tooltip.className = 'tooltip'
    tooltip.textContent = element.title
    tooltip.style.position = 'absolute' 

    // Для 
    tooltip.style.visibility = 'hidden'
    tooltip.style.display = 'block'

    element.after(tooltip)

    tooltip.style.left = `${Math.min(Math.floor(pos.left), window.visualViewport.width - tooltip.getBoundingClientRect().width - 8)}px`
    tooltip.style.display = ''
    tooltip.style.visibility = ''


    element.addEventListener('click', (event) => {
        event.preventDefault()
        tooltip.classList.toggle('tooltip_active')

        let tooltips = Array.from(document.querySelectorAll('div.tooltip'))
        tooltips.splice(tooltips.indexOf(tooltip), 1)
        tooltips.forEach(element => {
            element.classList.remove('tooltip_active')
        })
    })
})
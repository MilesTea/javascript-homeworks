const rotators = Array.from(document.querySelectorAll('span.rotator'));

function caseRotator(cases, currentCase) {
    cases[currentCase].classList.remove('rotator__case_active');
    currentCase = currentCase == (cases.length - 1) ? 0 : (currentCase + 1)
    cases[currentCase].classList.add('rotator__case_active');
    cases[currentCase].style.color = cases[currentCase].getAttribute('data-color')
    setTimeout(() => {caseRotator(cases, currentCase)}, cases[currentCase].getAttribute('data-speed'))
}

rotators.forEach(rotator => {
    const cases = Array.from(rotator.querySelectorAll('span.rotator__case'));
    caseRotator(cases, 0)
});
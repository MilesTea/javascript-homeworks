const tabsDivs = Array.from(document.querySelectorAll('div.tabs'));

tabsDivs.forEach((tabsDiv) => {
    let openedTab = 0
    const tabsNav = Array.from(tabsDiv.querySelectorAll('div.tab__navigation > div.tab'));
    const tabsContent = Array.from(tabsDiv.querySelectorAll('div.tab__contents > div.tab__content'));
    tabsNav.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            tabsContent[openedTab].classList.remove('tab__content_active')
            tabsContent[index].classList.add('tab__content_active')
            tabsNav[openedTab].classList.remove('tab_active')
            tabsNav[index].classList.add('tab_active')
            openedTab = index
        })
    })
});
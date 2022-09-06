const menu = document.querySelectorAll('ul.menu.menu_main > li.menu__item')
console.log(menu)
let arr = Array.from(menu)
let lastmenu
arr.forEach(element => {
    element.querySelector('a.menu__link').onclick = () => {
        const currentMenu = element.querySelector('ul.menu.menu_sub')

        if(!currentMenu) {return false};
        if (currentMenu.className.includes('menu_active')) {
            currentMenu.classList.remove('menu_active')
            lastmenu = undefined
        } else {
            currentMenu.classList.add('menu_active')
            if(lastmenu) {lastmenu.classList.remove('menu_active')}
            lastmenu = currentMenu
        }
        return false
    }
});
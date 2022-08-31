cookie = document.getElementById('cookie')
counter = document.getElementById('clicker__counter')
speed = document.getElementById('clicker__speed')

let lastClick = new Date();
cookie.onclick = () => {
    let ratio = cookie.height / cookie.width
    if (cookie.width == 200) {
        cookie.width = 300;
        cookie.height = ratio * 300;
    } else {
        cookie.width = 200;
        cookie.height = ratio * 200;
    }
    counter.textContent = Number(counter.textContent) + 1;
    let newClick = new Date();
    speed.textContent = (1 / (Number(newClick - lastClick) / 1000)).toFixed(2);
    lastClick = newClick;
}
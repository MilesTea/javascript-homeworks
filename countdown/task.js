timer = document.getElementById('timer')



let sec = String(Math.floor((Math.random() * 59)))
let min = String(Math.floor((Math.random() * 59)))
let hour = String(Math.floor((Math.random() * 23)))
if (sec.length < 2) sec = "0" + sec;
if (min.length < 2) min = "0" + min;
if (hour.length < 2) hour = "0" + hour;
timer.textContent = `${hour}:${min}:${sec}`


timerObservable = setInterval(() => {
    let sec = Number(timer.textContent.slice(-2))
    let min = Number(timer.textContent.slice(3, 5))
    let hour = Number(timer.textContent.slice(0, 2))

    if (sec == 0) {
        if (min == 0) {
            if (hour == 0) {
                clearInterval(timerObservable);
                window.alert('Вы победили в конкурсе!');
            } else {
                hour = hour - 1
                min = 59
                sec = 59
            }
        } else {
            min = min - 1
            sec = 59
        }
    } else {
        sec = sec - 1
    }

    sec = String(sec)
    min = String(min)
    hour = String(hour)
    if (sec.length < 2) sec = "0" + sec;
    if (min.length < 2) min = "0" + min;
    if (hour.length < 2) hour = "0" + hour;

    time = `${hour}:${min}:${sec}`
    timer.textContent = time;
}, 1000)
function check(hole) {
    return () => {
        if (hole.className.includes( 'hole_has-mole' )) {
            wins.textContent = Number(wins.textContent) + 1;
            hole.className = 'hole';
        } else {
            loses.textContent = Number(loses.textContent) + 1;
        }
        if (Number(wins.textContent) == 10) {
            alert('Вы победили!');
            wins.textContent = 0;
            loses.textContent = 0;
        } else if (Number(loses.textContent) == 5) {
            alert('Вы проиграли(');
            wins.textContent = 0;
            loses.textContent = 0;
        }
    }
}

let wins = document.getElementById('dead');
let loses = document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
    iHole = i => document.getElementById(`hole${i}`);
    iHole(i).onclick = check(iHole(i));
}
const rn = Math.floor(Math.random() * 100 + 1);
const r1 = require('readline').createInterface(process.stdin, process.stdout);
let tries = 1;

const questionPromise = function (text) {
    return new Promise((resolve) => {
        r1.question(text, (data) => {
            resolve(data);
        })
    })
};

function question() {
    questionPromise(`Попытка ${tries}\nВведите число: `)
    .then((str) => {
        console.log(str);
        let number = parseInt(str);
        if (number > rn) {
            console.log('Меньше');
        } else if (number < rn) {
            console.log('Больше');
        } else if (number == rn) {
            console.log(`вы угадали! Количество попыток: ${tries}`);
            r1.close();
            return
        }
        tries++;
        console.log();
        question();
    })
}

question();
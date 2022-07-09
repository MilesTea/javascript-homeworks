
function primeNumber(count) {
    let numbers = [];
    found = 0;
    for (let number = 2; found < count; number += 1) {
        let is_prime = true;
        for (let factor = 2; factor < number; factor += 1) {
            if (number % factor === 0) is_prime = false;
        }
        if (is_prime == true) {
            numbers.push(number);
            found++;
        }
    }
    return numbers;
}



console.log(primeNumber(process.argv[2]));

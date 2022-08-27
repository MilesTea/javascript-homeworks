function getPasswordChecker(p) {
    const password = p
    return function(ex_password) {
        return ex_password === password
    }
}

validator = getPasswordChecker('abcd')
console.log(validator('ab'))
console.log(validator('abcd'))
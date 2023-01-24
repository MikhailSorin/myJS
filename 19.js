var hotpo = function (n) {
    var number=n
    var c=0
    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2
        }else {
            number = 3 * number + 1
        }
        c = c + 1
        console.log(number)
    }
    return c

}
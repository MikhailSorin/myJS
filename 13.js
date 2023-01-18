function mango(quantity, price) {
    let sum1 = Math.floor(quantity / 3) * 2 * price
    let sum2 = quantity % 3 * price
    return sum1 + sum2

}
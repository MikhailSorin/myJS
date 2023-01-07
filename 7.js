function solution(str, ending) {
    let strReverse = str.split('').reverse().join('')
    let endingRevers = ending.split('').reverse().join('')
console.log(strReverse)
console.log(endingRevers)

    for (let i = 0; i < ending.length; i++) {
        if (strReverse[i] !== endingRevers[i])return false
    }
    return true


}
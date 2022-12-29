function hasSurvived(attackers, defenders) {
    let lenght = attackers.length >= defenders.length ? attackers.length : defenders.length
    let wins = 0
    attackers.map((el, index) => {
        if ((el > defenders[index]) || !defenders[index]) {
            wins = wins - 1
        } else if ((el < defenders[index]) || !el) {
            wins = wins + 1
        }
        console.log('wins=' + wins)
    })
    console.log('!!!!!!!!!!!!!!!!')
    let aaa = wins > 0 ? console.log('true') : console.log('false')
    if (wins > 0) {
        return true
    } else if (wins < 0) return false


    let sum1 = attackers.reduce((sum, el) =>sum + el, 0)
    let sum2 = defenders.reduce((sum, el) =>sum + el, 0)

    console.log((sum1 + '  ' + sum2))
    return (sum1 > sum2 ? false : true)
}
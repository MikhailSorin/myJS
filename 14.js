function aliasGen(a, b) {
    let nameFirstLetter = a[0].toUpperCase()
    let sernameFirstLetter = b[0].toUpperCase()
    console.log(firstName[nameFirstLetter])
    console.log(surname[sernameFirstLetter])
    if ((firstName[nameFirstLetter] == undefined) || (surname[sernameFirstLetter] == undefined)) return "Your name must start with a letter from A - Z."
    return firstName[nameFirstLetter] + ' ' + surname[sernameFirstLetter]
}
function covfefe(str) {
    console.log('')
    let arr = str.split('coverage')
    if (!str.includes('coverage')) {
        console.log(str + ' covfefe')
        return str + ' covfefe'
    } else {
        console.log( str.replaceAll('coverage', 'covfefe'))
        return str.replaceAll('coverage', 'covfefe')
    }

    //covfefe !
}
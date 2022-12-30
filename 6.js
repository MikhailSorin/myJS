function freqSeq(str, sep) {
    let arr= []
    let aaa = str.split('')
    aaa.map(((e, index) => {
        let bbb = aaa.filter((f) => f === e)
        arr[index] = bbb.length
    }))
    console.log(arr)
   var ccc=arr.join(sep)
    console.log(ccc)
    return ccc
}

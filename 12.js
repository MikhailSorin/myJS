function rowSumOddNumbers(n) {
    let startNumber=n*(n-1)+1
    let figuresQuantty=n
    console.log(startNumber,'startNumber')
    console.log(figuresQuantty,'figersQuantty')
    let s=startNumber
    let sum=0
    if(n===1)return 1
    for (let i = 1; i <=figuresQuantty ; i++) {

        sum=sum+s
        s=s+2
        console.log('i=',i,' s+ ',s,' sum= ',sum)
    }
    return sum
}
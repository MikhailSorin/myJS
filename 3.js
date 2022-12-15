function solution(start, finish) {
    if (finish === start) return 0
    if ((finish - start) <= 3) return 1

    let counter = 0
    for (let i = start; i < finish; i = i + 3) {
        console.log('i=' + i + '  counter=' + counter)
        /*  if ((finish - i)<=3) return counter + 1*/
        counter = counter + 1

    }

    return counter


    //Mew
}
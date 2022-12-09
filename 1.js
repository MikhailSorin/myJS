function stray(numbers) {

    const result = numbers.filter(n => numbers[0] != n);
    console.log(result)
    if(result.length==1)return result[0]
    return numbers[0]


}



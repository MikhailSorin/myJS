function getSum( a,b )
{
    let sum=0
    if(a<b){
        for (let i = a; i <=b ; i++) {
            sum=sum+i
        }}
    if(a>b){
        for (let i = a; i >=b ; i--) {
            sum=sum+i
        }}
    if(a==b)return a
    return sum
}
function convertHashToArray(hash) {
    return Object.entries(hash).sort((a, b)=> {
        if(a[0].toLowerCase() > b[0].toLowerCase())return 1
        return -1
    })
}
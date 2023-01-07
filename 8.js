function consonantCount(str) {
    let aaa=str.replace(/[BbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvWwXxYyZz]/gi,'')
    console.log(aaa+'   ')
    return str.length-aaa.length
}
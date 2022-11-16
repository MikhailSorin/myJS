function preFizz(n) {
  var arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
    console.info("arr[" + i + "]=" + i);
  }
  return arr;
}

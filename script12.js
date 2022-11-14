function grow(x) {
  var val;
  var res = 1;
  for (val of x) {
    res *= val;
    console.info(res);
  }
  return res;
}

function eqSumPowdig(hMax, exp) {
  let summ = 0;
  let arr = [];
  for (let i = 2; i <= hMax; i++) {
    var digits = i.toString().split("");
    for (let ii = 0; ii < digits.length; ii++) {
      summ = summ + (+digits[ii]) ** exp;
    }
    if (summ == i) {
      arr.push(summ);
    }
    summ = 0;
  }
  console.log("ARR=" + arr);
  return arr;
}

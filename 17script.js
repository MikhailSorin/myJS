function nextNumb(val) {
  var nextNumber;
  for (let i = val + 1; i < val + 10000000000000; i++) {
    if (
      (i % 3 == 0) &
      (i > 0) &
      (i % 2 != 0) &
      !/(.).*?\1/.test(i) &
      (i < 9999999999)
    ) {
      console.info("!/(.).*?\1/.test(i)=" + !/(.).*?\1/.test(i) + "i=" + i);
      return i;
    } else if (i >= 9999999999) {
      return "There is no\
   possible number that fulfills those requirements";
    }
  }
}

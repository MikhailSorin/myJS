function isPalindrome(x) {
  var bbb;
  var st = x.toLowerCase();
  //console.info(Math.floor(x.length / 2));
  if (x.length <= 1) {
    return true;
  }

  for (let i = 0; i < Math.floor(x.length / 2); i++) {
    var ii = x.length - i - 1;
    console.info(i, "  ", st[i]);
    console.info(ii, "  ", st[ii]);

    if (st[i] == st[ii]) {
      bbb = true;
    } else {
      return false;
    }
  }
  return bbb;
}

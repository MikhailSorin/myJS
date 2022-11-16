function isVow(a) {
  var vovSimbs = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < a.length; i++) {
    if (a[i] == vovSimbs[0].charCodeAt()) {
      a[i] = "a";
    } else if (a[i] == vovSimbs[1].charCodeAt()) {
      a[i] = "e";
    } else if (a[i] == vovSimbs[2].charCodeAt()) {
      a[i] = "i";
    } else if (a[i] == vovSimbs[3].charCodeAt()) {
      a[i] = "o";
    } else if (a[i] == vovSimbs[4].charCodeAt()) {
      a[i] = "u";
      console.log("kkk");
    }

    //a[0]='sss';
    //  for (var val of a) {
    //     console.log(val);
  }
  return a;
}

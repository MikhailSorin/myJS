const orderedCount = function (text) {
  var subArr = [];
  var arr = [];
  var textOut = text;

  while (textOut.length > 0) {
    const regex = new RegExp(textOut[0], "gi");
    // console.info(regex);
    // console.info(textOut.match(regex).length);
    subArr[0] = textOut[0];
    subArr[1] = textOut.match(regex).length;
    arr.push([subArr[0], subArr[1]]);
    console.log(arr);
    console.log(subArr);
    textOut = textOut.replace(regex, "");
  }

  return arr;
};

function disemvowel(str) {
  var strCopy = str;
  const regex = /[aeiouAEIOU]/g;

  strCopy.replace(regex, "");
  //console.info(strCopy.replace(regex, ""));
  console.info("");
  return strCopy.replace(regex, "");
}

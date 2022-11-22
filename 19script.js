// write the function isAnagram
var isAnagram = function (test, original) {
  var testA, originalA;
  testA = test.toLowerCase("").split("");
  console.info(testA.sort().join(""));
  originalA = original.toLowerCase("").split("");
  console.info(originalA.sort().join(""));
  if (testA.sort().join("") == originalA.sort().join("")) {
    return true;
  }
  return false;
};

String.prototype.toJadenCase = function () {
  var arr1 = this.split(" ");
  arr1 = arr1.map((n) => n[0].toUpperCase() + n.substring(1));
  console.info(arr1);
  return arr1.join(" ");
};

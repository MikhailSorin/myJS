var isSquare = function (n) {
  if (n < 0) return false;
  if (n == 0) return true;

  return Math.sqrt(n) % 1 === 0;
};

function wallpaper(l, w, h) {
  var numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];
  var pieces = Math.ceil((((2 * l + 2 * w) * h) / 5.2) * 1.15);
  console.info((((2 * l + 2 * w) * h) / 5.2) * 1.15);
  console.info(pieces);
  console.info(numbers[pieces]);
  if (
    (l <= 0) |
    (w <= 0) |
    (h <= 0) //|
  ) {
    return "zero";
  }
  {
    return numbers[pieces];
  }
}

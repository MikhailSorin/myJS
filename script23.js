function getAverage(marks) {
  var val;
  var average = 0;

  for (val of marks) {
    average = average + val;
  }
  average = average / marks.length;
  console.log("average=" + average);
  return Math.floor(average);
}
//return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
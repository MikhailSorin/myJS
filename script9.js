function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var val;
  for (val of birds) {
    console.log(val);
  }
  console.log("        ");

  for (let index = birds.length; index >= 0; index--) {
    if (
      (birds[index] == geese[0]) |
      (birds[index] == geese[1]) |
      (birds[index] == geese[2]) |
      (birds[index] == geese[3]) |
      (birds[index] == geese[4])
    ) {
      console.log(index);
      birds.splice(index, 1);
    }
  }

  for (val of birds) {
    console.log(val);
  }

  return birds;
}

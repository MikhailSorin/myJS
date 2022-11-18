function barTriang(p1, p2, p3) {
  var coord = [];
  coord[0] = Number(((p1[0] + p2[0] + p3[0]) / 3).toFixed(4));
  coord[1] = Number(((p1[1] + p2[1] + p3[1]) / 3).toFixed(4));
  console.info(coord[0] + "   " + coord[1]);
  return coord;
}

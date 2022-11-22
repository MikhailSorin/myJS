function filter_list(l) {
  var newl = [];
  for (let i = 0; i < l.length; i++) {
    if (l[i] === +l[i].toString()) {
      newl.push(l[i]);
      console.info(l[i]);
    }
  }
  return newl;
}

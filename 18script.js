function nextPal(val) {
  for (let i = val + 1; i < val + 100000000000; i++) {
    //console.info("i=" + i);
    //console.info("i.toString()=" + i.toString());
    //console.info(
    //  'i.toString().split("").reverse().join()=' +
    //   i.toString().split("").reverse("").join("")
    //);

    if (i.toString() == i.toString().split("").reverse("").join("")) {
      return i;
    }
  }
}

function mostFrequentItemCount(collection) {
  let collectionCopy = collection;
  let count = 0;
  let max = 0;
  console.info("start" + collectionCopy);
  for (let i = 0; i < collectionCopy.length; i++) {
    for (let j = 0; j < collectionCopy.length; j++) {
      if (collectionCopy[i] == collectionCopy[j]) {
        count = count + 1;
        console.info(collectionCopy);
      }
      if (max < count) {
        max = count;
        console.info("max+=" + max);
      }
    }
    console.info(collectionCopy);
    count = 0;
  }
  console.info("max=" + max);
  return max;
}

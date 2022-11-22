function unscrambleEggs(word) {
  let wordHelp;
  wordHelp = word.replace(/egg/gi, "");
  console.info(wordHelp);
  return wordHelp;
}

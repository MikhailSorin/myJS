function htmlspecialchars(str) {
  var myStr;
  myStr = str
    .replace("&"/g, "&amp")
    .replace("<", "&lt")
    .replace(">", "&gt")
    .replace('"', "&quot");
  console.info(myStr);
  return myStr;
}

/*myStr = str.replace("<", "&lt");
    console.info(myStr);
    myStr = myStr.replace(">", "&gt");
    console.info(myStr);
    myStr = myStr.replace('"', "&quot");
    console.info(myStr);
    myStr = myStr.replace("&", "&amp");
    console.info(myStr);*/

function getCount(str) {
  const regex = /[a,e,i,o,u]/g;
  var found = str.match(regex);
  if(found!=null){return found.length;}
  return 0;
}
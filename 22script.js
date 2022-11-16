/*function areYouPlayingBanjo(name) {
  if (name.charAt(0).toLowerCase() == "r") {
    return name + " plays banjo";
  }
  // Implement me
  return name + " does not play banjo";
}*/
const areYouPlayingBanjo = (name) =>
  name.charAt(0).toLowerCase() == "r"
    ? name + " plays banjo"
    : name + " does not play banjo";

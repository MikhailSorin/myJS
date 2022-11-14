function greet(language) {
  const map1 = new Map();
  map1.set("english", "Welcome");
  map1.set("czech", "Vitejte");
  map1.set("danish", "Velkomst");
  map1.set("dutch", "Welkom");
  map1.set("estonian", "Tere tulemast");
  map1.set("finnish", "Tervetuloa");

  map1.set("flemish", "Welgekomen");
  map1.set("french", "Bienvenue");
  map1.set("german", "Willkommen");
  map1.set("irish", "Failte");
  map1.set("italian", "Benvenuto");
  map1.set("latvian", "Gaidits");

  map1.set("lithuanian", "Laukiamas");
  map1.set("polish", "Witamy");
  map1.set("spanish", "Bienvenido");
  map1.set("swedish", "Valkommen");
  map1.set("welsh", "Croeso");

  console.info(language);
  console.info(map1.get(language));
  if (map1.get(language) === undefined) {
    return "'Welcome'. Try again.";
  }
  return map1.get(language);
}

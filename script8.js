function buildString(...template) {
  console.info(`I like #{template.join(',')}!`);
  return `I like #{template.join(',')}!`;
}

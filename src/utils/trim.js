function trim(text, cut = 50) {
  if (text.length <= cut) return text;
  const result = text.slice(0, cut);
  return `${result}...`;
}

export default trim;

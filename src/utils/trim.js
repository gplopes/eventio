function trim(text, cut = 50) {
  if (text.length <= 50) return text;
  const result = text.slice(0, cut);
  return `${result}...`;
}

export default trim;

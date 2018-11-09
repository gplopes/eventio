function trim(string, cut = 50) {
  const text = string.slice(0, cut);
  return `${text}...`;
}

export default trim;

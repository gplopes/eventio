function trim(text: string, cut: number = 50): string {
  if (text.length <= cut) return text;
  const result = text.slice(0, cut);
  return `${result}...`;
}

export default trim;

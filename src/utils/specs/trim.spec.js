import trim from "../trim";

describe("trim", () => {
  const text = "It is a text with 26 chars";
  test("should return full text with cut is longer", () => {
    expect(trim(text, 26)).toBe(text);
  });
  
  test("should return short text with '...' suffix", () => {
    const suffixLength = 3; // "..."
    expect(trim(text, 10).length).toBe(10 + suffixLength)
  });
});

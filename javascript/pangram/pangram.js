export const isPangram = (sentence) => {
  let letters = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
  let lowered = new Set(sentence.toLowerCase());
  for (let letter of letters) {
    if (!lowered.has(letter)) {
      return false;
    }
  }
  return true;
};

const convert = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};
export const toRna = (dnaString) => {
    let converted = '';
    for (let singleLetter of dnaString) {
      converted += convert[singleLetter];
    }
    return converted;
};

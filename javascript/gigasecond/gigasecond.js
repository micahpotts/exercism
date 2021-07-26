export const gigasecond = (input) => {
  let gs = new Date(input.getTime() + 1000000000000);
  return gs;
};

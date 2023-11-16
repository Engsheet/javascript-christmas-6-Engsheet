export const totalArray = array => {
  const total = array.reduce((acc, cur) => acc + cur, 0);

  return total;
};

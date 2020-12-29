export const keyArray = (array, key) =>
  array.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});

export default keyArray;

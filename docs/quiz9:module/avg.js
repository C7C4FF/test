function avg(...rest) {
  let total = 0;
  let count = 0;

  let array = Array.isArray(rest[0]) ? [...rest[0]] : rest;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      total += array[i];
      count += 1;
    }
  }
  return total / count;
}

export default avg;

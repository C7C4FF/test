function random(a, b) {
  let total = 0;
  if (arguments.length === 1) {
    total = Math.floor(Math.random() * a);
  } else if (arguments.length === 2) {
    if (typeof a === 'string' || typeof b === 'string') {
      total = -1;
    } else {
      total = Math.floor(Math.random() * b) + a;
    }
  }
  return total;
}

export default random;

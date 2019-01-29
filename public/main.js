var multiply = (_a, _b) => {
  let a = _a;
  let b = _b;
  if (a < 0) {
    a = -a;
    b = -b;
  }
  let sum = 0;
  for (let i = 0; i < a; i++) {
    sum += b;
  }
  return sum;
}

module.exports = {
  multiply,
};

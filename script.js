function range(start, end, step) {
  if (step === undefined) {
    step = 1;
  }
  let numsArr = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      numsArr.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      numsArr.push(i);
    }
  }
  return numsArr;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length; i++) {
    total += i;
  }
  return total;
}

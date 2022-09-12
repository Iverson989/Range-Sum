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

// TESTS:
let test1 = range(1, 10);
let test2 = range(5, 2, -1);
let test3 = sum(test1);
console.log(
  `test1 should log 1, 2, 3, 4, 5, 6, 7, 8, 9, 10; actual: ${test1}\ntest2 should log 5, 4, 3, 2; actual: ${test2}\ntest3 should log 55; actual: ${test3}`
);

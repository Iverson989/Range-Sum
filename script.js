function range(start, end) {
  let numsArr = [];
  for (let i = start; i <= end; i++) {
    numsArr.push(i);
  }
  return numsArr;
}

let nums = range(1, 10);

function sum(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length; i++) {
    total += i;
  }
  return total;
}

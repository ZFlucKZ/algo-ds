function maxSubarraySum(arr, number) {
  if (arr.length < number) {
    return null;
  }

  let highest = 0;
  let index = 0;

  while (index !== arr.length) {
    let sum = 0;
    for (let i = index; i < index + number; i++) {
      if (!arr[i]) {
        sum = sum;
      } else {
        sum += arr[i];
      }
    }

    index++;

    highest = Math.max(sum, highest);
  }
  return highest;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

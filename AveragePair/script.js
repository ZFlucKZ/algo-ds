function averagePair(arr, number) {
  if (arr.length === 0) {
    return false;
  }

  const sum = number * 2;

  let min = 0;
  let max = arr.length - 1;

  while (max > min) {
    if (arr[min] + arr[max] === sum) {
      return true;
    } else if (arr[min] + arr[max] > sum) {
      max -= 1;
    } else if (arr[min] + arr[max] < sum) {
      min += 1;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

//* Optimize with no swap

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let noSwaps = true;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([1, 5, 3, 8, 4, 2, 50, 3, 156]));

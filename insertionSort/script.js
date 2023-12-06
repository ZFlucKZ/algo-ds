function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    latestIndex = -1;

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j];

        latestIndex = j;
      }
    }

    if (latestIndex !== -1) {
      arr[latestIndex] = currentVal;
    }
  }
  return arr;
}

console.log(insertionSort([-5, -1, 1, 5, 3, 8, 4, 2, 50, 3, 156, 50, 87, 65]));

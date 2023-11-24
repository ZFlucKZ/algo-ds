function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let tempIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        tempIndex = j;
        min = arr[j];
      }

      if (i !== tempIndex) {
        [arr[i], arr[tempIndex]] = [arr[tempIndex], arr[i]];
      }
    }
  }

  return arr;
}

console.log(selectionSort([1, 5, 3, 8, 4, 2, 50, 3, 156, 50, 87, 65]));

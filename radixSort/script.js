function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }

  return maxDigits;
}

function radixSort(arr) {
  let largestDigits = mostDigits(arr);

  for (let i = 0; i < largestDigits; i++) {
    let bucket_0 = [];
    let bucket_1 = [];
    let bucket_2 = [];
    let bucket_3 = [];
    let bucket_4 = [];
    let bucket_5 = [];
    let bucket_6 = [];
    let bucket_7 = [];
    let bucket_8 = [];
    let bucket_9 = [];

    for (let j = 0; j < arr.length; j++) {
      const n = getDigit(arr[j], i);

      switch (n) {
        case 0:
          bucket_0.push(arr[j]);
          break;
        case 1:
          bucket_1.push(arr[j]);
          break;
        case 2:
          bucket_2.push(arr[j]);
          break;
        case 3:
          bucket_3.push(arr[j]);
          break;
        case 4:
          bucket_4.push(arr[j]);
          break;
        case 5:
          bucket_5.push(arr[j]);
          break;
        case 6:
          bucket_6.push(arr[j]);
          break;
        case 7:
          bucket_7.push(arr[j]);
          break;
        case 8:
          bucket_8.push(arr[j]);
          break;
        case 9:
          bucket_9.push(arr[j]);
          break;
      }
    }

    arr = [
      ...bucket_0,
      ...bucket_1,
      ...bucket_2,
      ...bucket_3,
      ...bucket_4,
      ...bucket_5,
      ...bucket_6,
      ...bucket_7,
      ...bucket_8,
      ...bucket_9,
    ];
  }

  return arr;
}

console.log(radixSort([4, 6, 98, 1112, 2, 56]));
console.log(radixSort([2, 5, 18, 4, 451, 5, 1, 8, 50000, 400, 620, 840, 100, 312, 101]));

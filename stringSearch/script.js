function stringSearch(longStr, shortStr) {
  const n = longStr.length;
  const m = shortStr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (longStr[i + j] !== shortStr[j]) {
        break;
      }

      if (j === m - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(stringSearch('lorie loled', 'lol')); // 3

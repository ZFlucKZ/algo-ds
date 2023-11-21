function findLongestSubstring(str) {
  if (str === '') {
    return 0;
  }

  let max = -Infinity;
  let result = '';

  for (let i in str) {
    let charIndex = result.indexOf(str[i]);

    if (charIndex !== -1) {
      result = result.substring(charIndex + 1);
      result += str[i];
    } else {
      result += str[i];
    }
    max = Math.max(result.length, max);
  }

  return max;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6

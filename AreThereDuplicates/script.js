function areThereDuplicates(...numbers) {
  const uniqueArr = [...new Set(numbers)];

  return numbers.length !== uniqueArr.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

function flatten(arr) {
  let result = [];

  function helper(arr) {
    if (arr.length == 0) {
      return;
    }

    if (typeof arr[0] === 'number') {
      result.push(arr[0]);
    } else {
      helper(arr[0]);
    }
    helper(arr.slice(1));
  }

  helper(arr);

  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]

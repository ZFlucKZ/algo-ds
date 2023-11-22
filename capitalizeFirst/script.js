function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return [];
  }

  let capStr = arr[0][0].toUpperCase() + arr[0].substring(1);

  return [capStr].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']

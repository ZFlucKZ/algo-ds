function fib(index, first = 1, second = 1, position = 2) {
  if (index === position) {
    return second;
  }

  const tempFirst = first;
  first = second;
  second = tempFirst + second;

  return fib(index, first, second, position + 1);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

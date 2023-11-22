function isPalindrome(str) {
  const reverseStr = reverseHelper(str);

  if (str === reverseStr) {
    return true;
  }

  return false;
}

function reverseHelper(str) {
  if (str === '') {
    return '';
  }

  return reverseHelper(str.substring(1)) + str[0];
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false

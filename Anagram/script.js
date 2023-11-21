function validAnagram(str1, str2) {
  let charStr1 = {};
  let charStr2 = {};

  for (const char of str1) {
    if (charStr1[char] > 0) {
      charStr1[char]++;
    } else {
      charStr1[char] = 1;
    }
  }

  for (const char of str2) {
    if (charStr2[char] > 0) {
      charStr2[char]++;
    } else {
      charStr2[char] = 1;
    }
  }

  for (const char in charStr1) {
    if (charStr1[char] !== charStr2[char]) {
      return console.log(false);
    }
  }

  return console.log(true);
}

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true

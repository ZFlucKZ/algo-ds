function sameFrequency(n1, n2) {
  let obj1 = {};
  let obj2 = {};

  for (let n of n1.toString()) {
    if (obj1[n] > 0) {
      obj1[n]++;
    } else {
      obj1[n] = 1;
    }
  }

  for (let n of n2.toString()) {
    if (obj2[n] > 0) {
      obj2[n]++;
    } else {
      obj2[n] = 1;
    }
  }

  for (let n in obj1) {
    if (obj1[n] !== obj2[n]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

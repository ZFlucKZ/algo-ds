function reverse(str) {
  if (str === '') {
    return '';
  }

  return reverse(str.substring(1)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

const numbers = [33, 2, 8];
numbers.sort((a,b) => a > b ? 1:b > a?-1:0);

console.log(numbers);
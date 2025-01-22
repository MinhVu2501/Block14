const alertInput = prompt('Please input numbers separated by commas');
const numberInput = alertInput.split(',');
const numbers = [];
for (let i = 0; i < numberInput.length; i++) {
  const str = numberInput[i];
  const number = parseInt(str);
  numbers.push(number);
}

function getLength(numbers) {
  return numbers.length;
}

function getSum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

function getMean(numbers) {
if (numbers.length === 0) {
  return 0;
} else {
  return getSum(numbers)/ numbers.length;
}
}

function getMin(numbers) {
  if (numbers.length === 0) {
    return null;
  } 
    let min = numbers[0];
    for (let number of numbers) {
      if (number < min) {
        return min = number;
      }
    }
    return min;
}

function getMax(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let max = numbers[0];
  for (let number of numbers) {
    if (number > max) {
       max = number;
    }
  }
  return max;
}

function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
} 

function getEvens(numbers) {
  const evenNumbers = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

function getOdds(numbers) {
  const oddNumbers = [];
  for (let number of numbers) {
    if (number % 2 === 1) {
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}

console.log(numbers);
console.log(getLength(numbers));
console.log(getSum(numbers));
console.log(getMean(numbers));
console.log(getMin(numbers));
console.log(getMax(numbers));
console.log(getRange(numbers));
console.log(getEvens(numbers));
console.log(getOdds(numbers));
//Part One
let counter = 0;

function incrementCounter() {
  counter++;
  incrementCounter();
}

try {
  incrementCounter();
} catch (error) {
  console.log(error, counter);
}

//Part Two

const myArr = [1, 2, 3, [4, 5], 6, 7, [8, [9]]];

let newArr = [];

function flatten(index, arr) {
  if (index >= arr.length) return newArr;

  if (Array.isArray(arr[index])) {
    flatten(0, arr[index]);
  } else {
    newArr.push(arr[index]);
  }

  return flatten(index + 1, arr);
}

console.log(flatten(0, myArr));

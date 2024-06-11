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

function flatArray(arr) {
  let newArr = [];
  flatten(0, arr, newArr);
  return newArr;
}

function flatten(index, arr, newArr) {
  if (index >= arr.length) return;

  if (Array.isArray(arr[index])) {
    flatten(0, arr[index], newArr);
  } else {
    newArr.push(arr[index]);
  }

  flatten(index + 1, arr, newArr);
}

console.log(flatArray(myArr));

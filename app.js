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

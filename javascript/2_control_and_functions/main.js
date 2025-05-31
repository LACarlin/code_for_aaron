// CONDITIONALS

// We use conditionals when we only want to do things sometimes
if (a_is_true) {
  // do this thing
  console.log("A");
} else if (b_is_true) {
  // do this thing
  console.log("B");
} else {
  // do this default
  console.log("default");
}

// Like this
const numberOfZebras = 5;

if (numberOfZebras === 0) {
  // do this thing
  console.log("Aww, no zebras... 🚫");
} else {
  // do this other thing by default
  console.log("Ooh, look, zebras! 🦓🦓🦓🦓");
}

// Or this
if (numberOfZebras === 0) {
    console.log("Aww, no zebras... 🚫");
} else if (numberOfZebras === 1) {
    //we can have many else-ifs
    console.log("My zebra is lonely... 🦓");
} else {
    console.log("Ooh, look, zebras! 🦓🦓🦓🦓");
}

// We can use 'if' without 'else'
const myAnimal = "elephant";
let myAnimalName = "Bessie";

if(myAnimal === "elephant") {
  myAnimalName = "Dumbo";
}

console.log(myAnimalName);

// There are six conditional operators:

// - `===` Equal to
// - `!==` Not equal to
// - `>` Greater than
// - `<` Less than
// - `>=` Greater than or equal to
// - `<=` Less than or equal to

// What is the result of this code?
const numFoxes = 7;
const numRabbits = 4;
const daysSinceFoxesLastAte = 2;

if (numFoxes > numRabbits && daysSinceFoxesLastAte >= 1) {
  console.log("The foxes will be hungry");
} else {
  console.log("The foxes will be well-fed");
}

// We can have nested 'if' statements for more complex situations, but they can get difficult to follow!
const hour = 11;
const weather = "sunny";
let action = "";

if (hour < 7 || hour > 22) {
  action = "You should be asleep";
} else {
  if (weather === "sunny") {
    action = "You should be singing in the hills";
  } else if (weather === "rainy") {
    action = "You should sit inside and play games";
  } else if (weather === "snowy") {
    action = "You should be building a snowperson";
  } else {
    action = "Do what you like";
  }
}

// We can condense the if statement using the ternary operator
// let numberOfDinosaurs

// if (numberOfMeteors >= 1) {
//   numberOfDinosaurs = 0;
// } else {
//   numberOfDinosaurs = 20;
// }
// Can be written as
const numberOfDinosaurs = numberOfMeteors >= 1 ? 0 : 20;


// LOOPS

// We want to log the exponential growth of the bunny population
let rabbits = 2;
console.log(rabbits); // 2
rabbits = rabbits * 2;
console.log(rabbits); // 4
rabbits = rabbits * 2;
console.log(rabbits); // 8
rabbits = rabbits * 2;
console.log(rabbits); // 16

// This is time consuming. We can use a for loop to make it easier. A for loop does something a fixed number of times.
// let rabbits = 2
const days = 7;

// Note that we start counting at 0 - this is very common in programming languages
for (let i = 0; i < days; i++) {
  console.log(rabbits);
  rabbits = rabbits * 2;
}

// What is the result of this for loop?
for (let counter = 1; counter <= 5; counter++) {
  let text = "";
  for (let j = 1; j <= counter; j++) {
    text += j; // x += y means the same as x = x + y
  }
  console.log(text);
}

// A while loop goes round and round until we tell it to stop
// let cats = 2
// while (true) {
//   cats = cats * 2
//   console.log(cats)
// } // What is the problem with this?

// How about this one?
let hedgehogs = 2;
let month = 0;
const months = 7;
while (month < months) {
  hedgehogs = hedgehogs * 2;
  console.log(hedgehogs);
  month = month + 1;
}

// If we want a loop to always run at least once, we can put the check at the end

let text = "";
let i = 0;
do {
  text += "I have " + i + " zebras ";
  console.log(text);
  i++;
} while (i < 5) // this is called a do-while loop

// There are two more useful tools that can be used with loops, break and continue
// Break is used to break out of a loop
let horses = 2;
let maxDays = 10;
for (let i = 0; i < 100; i++) {
  console.log(horses);
  horses = horses * 2;
  if (i >= maxDays) {
    break;
  }
} // How many days will this let the horses reproduce?

// Continue is used to jump or skip over one iteration in a loop
for (let i = 1; i < 20; i++) {
  if (i % 5 === 0 || i % 3 === 0) {
    continue;
  }
  console.log(i);
  if (Math.sqrt(i) >= 4) {
    break;
  }
} // What numbers will be printed?


// FUNCTIONS

// If our code gets big we need to separate it into pieces we can manage more easily.
// A function is a JavaScript procedure — a set of statements that performs a task or calculates a value
function multiply(number1, number2) {
  // We can put as much code as we like in here
  return number1 * number2;
}

let bigNumber = multiply(4, 5);

// Good functions:
// - Do a single thing
// - Have sensible names that make it clear what the function does
// - Have sensibly-named parameters that make it clear what the function needs

// Is this a good function?
function doMaths(a, b, divide) {
  if (divide) {
    return a / b;
  } else {
    return a + b;
  }
}

let addedUp = doMaths(3, 4, false);
let divided = doMaths(3, 4, true);

// Why is this better?
function addUp(number1, number2) {
  return number1 + number2;
}

function divide(numerator, denominator) {
  return numerator / denominator;
}

let addedUpProperly = addUp(3, 4);
let dividedProperly = divide(3, 4);

// If we have some common code, or things we do lots of times, we should make a function for that
console.log("Hello Aaron. I hope you're well!");
console.log("Hello Jonah. I hope you're well!");
console.log("Hello Bob. I hope you're well!");

// Could be
function greet(name) {
  console.log("Hello " + name + ". I hope you're well!");
}

greet("Aaron");
greet("Jonah");
greet("Bob");

// We can use functions within each other, like we can if we nest `if` blocks.
function printSmallAnimals() {
  console.log("🐁🐤🐞");
}
function printBigAnimals() {
  console.log("🦒🐮");
}
function printAnimals() {
  printBigAnimals();
  printSmallAnimals();
}
console.log("🐟");
printAnimals(); // What is the output of this code?

// This code doesn't work. Why not?
function calculateMagicNumber(number1, number2) {
  let magicNumber = number1 + number2;
  magicNumber = (magicNumber * number1) / number2;
}

// This prints "undefined" for some reason 😡
console.log(calculateMagicNumber(16, 7));

// For functions that are calculating answers, we can `return` those answers
function calculateMagicNumberAgain(number1, number2) {
  let magicNumber = number1 + number2;
  magicNumber = (magicNumber * number1) / magicNumber;
  return magicNumber;
}

console.log(calculateMagicNumberAgain(16, 7));

// We can also call functions with `return` values within each other

function addUp(number1, number2) {
  return number1 + number2;
}
function divide(numerator, denominator) {
  return numerator / denominator;
}
function moreMaths(badName1, badName2) {
  let added = addUp(badName1, badName2);
  let result = divide(added, badName2);
  return result;
}
console.log(moreMaths(20, 30));

// There is another way to write functions, called 'arrow functions'. These do the same job, but a simpler to write so most people prefer to use them
// Named Function
function addTwoNumbers(a, b) {
  return a + b;
}

// Named Arrow Function
const addTwoNumbers = (a, b) => {
  return a + b;
};

// We can simplify our arrow functions even more by implicitly returning a result

// Explicit Return
const addTwoNumbers = (a, b) => {
  return a + b;
};

// Implicit Return
const addTwoNumbers = (a, b) => a + b;

// With only one argument, we can strip the parenthesis altogether, resulting in the shortest function definition you can write

const double = a => 2 * a;

double(10); // 20
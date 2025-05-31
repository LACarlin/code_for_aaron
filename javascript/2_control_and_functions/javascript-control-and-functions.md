---
title: JavaScript 2 - Control and Functions
---

# JavaScript 2:

## Control and Functions

<aside class="notes">
  N/A
</aside>

---

## Overview

- Logic with `if`
- Looping with `for`
- Looping with `while`
- Combinations of these
- Why we use functions
- How we write good functions

<aside class="notes">
  N/A
</aside>

---

## Objectives

- Write `if` statements and ternary operators
- Write `for` and `while` loops
- Describe what functions are and why they're useful
- Identify and describe what makes a "good" or "bad" function
- Refactor existing code into functions
- Write basic functions from scratch

<aside class="notes">
  N/A
</aside>

---

## Conditionals

We use these when we want to only do things _sometimes_.

<aside class="notes">
  N/A
</aside>

---

## Using the `if` block

```js
if (a_is_true) {
  // do this thing
  console.log("A")
} else if (b_is_true) {
  // do this thing
  console.log("B")
} else {
  // do this default
  console.log("default")
}
```

<span>`if` at the start</span><!-- .element: class="fragment" -->

<span>`else if` we want another condition</span><!-- .element: class="fragment" -->

<span>`else` is the default</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

For example:

```js
const numberOfZebras = 5

if (numberOfZebras === 0) {
  // do this thing
  console.log("Aww, no zebras... 🚫")
} else {
  // do this other thing by default
  console.log("Ooh, look, zebras! 🦓🦓🦓🦓")
}
```

<span>We evaluate _expressions_, and perform actions _if_ those expressions evaluate to _true_</span><!-- .element: class="fragment" -->

<span>_else_, we do a different action</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

And also for example:

```js
const numberOfZebras = 5

if (numberOfZebras === 0) {
    console.log("Aww, no zebras... 🚫")
} else if (numberOfZebras === 1) {
    //we can have many else-ifs
    console.log("My zebra is lonely... 🦓")
} else {
    console.log("Ooh, look, zebras! 🦓🦓🦓🦓")
}
```

<span>We can have many options using `else if`</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

## Using `if` without `else`

We can use `if` statements without a corresponding `else`

```js
const myAnimal = "elephant"
let myAnimalName = "Bessie"

if(myAnimal === "elephant") {
  myAnimalName = "Dumbo"
}

console.log(myAnimalName)
```

<aside class="notes">
    N/A
</aside>

---

### Emoji Check:

How do you feel about the progress so far?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## Conditional operators

There are six conditional operators:

- `===` Equal to
- `!==` Not equal to
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal to
- `<=` Less than or equal to

<aside class="notes">
  N/A
</aside>

---

What is the result of running this code?

```js
const numFoxes = 7
const numRabbits = 4
const daysSinceFoxesLastAte = 2

if (numFoxes > numRabbits && daysSinceFoxesLastAte >= 1) {
  console.log("The foxes will be hungry")
} else {
  console.log("The foxes will be well-fed")
}
```

1. "The foxes will be hungry"
1. "The foxes will be well-fed"

<span>Answer: `The foxes will be hungry`</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

We can also have nested `if` statements for more complex situations

```js
const hour = 11
const weather = "sunny"
let action = ""

if (hour < 7 || hour > 22) {
  action = "You should be asleep"
} else {
  if (weather === "sunny") {
    action = "You should be singing in the hills"
  } else if (weather === "rainy") {
    action = "You should sit inside and play games"
  } else if (weather === "snowy") {
    action = "You should be building a snowperson"
  } else {
    action = "Do what you like"
  }
}
```

<aside class="notes">
  Avoid nesting, as it becomes difficult to follow
</aside>

---

### Emoji Check:

How do you feel about the progress so far?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## Ternary operator

Consider this expression;

```js
let numberOfDinosaurs

if (numberOfMeteors >= 1) {
  numberOfDinosaurs = 0
} else {
  numberOfDinosaurs = 20
}
```

We would like to abbreviate it.

<aside class="notes">
  N/A
</aside>

---

We can condense the `if` statement using the ternary operator:

```js
const numberOfDinosaurs = numberOfMeteors >= 1 ? 0 : 20
```

Which is

```js
const result = <expression> ? when_true : when_false
```

<aside class="notes">
  N/A
</aside>

---

### Emoji Check:

How do you feel about the progress so far?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## Loops

What's the best way of doing something over and over again?

<aside class="notes">
  N/A
</aside>

---

We want to log the exponential growth of a bunny population:

```js
let rabbits = 2
console.log(rabbits) // 2
rabbits = rabbits * 2
console.log(rabbits) // 4
rabbits = rabbits * 2
console.log(rabbits) // 8
rabbits = rabbits * 2
console.log(rabbits) // 16
```

We can print the numbers for each day individually, but this is time-consuming and tedious.

<aside class="notes">
  N/A
</aside>

---

## The `for` loop

The `for` loop repeats a fixed number of times

```js
let rabbits = 2
const days = 7

for (let i = 0; i < days; i++) {
  console.log(rabbits)
  rabbits = rabbits * 2
}
```

<span>Note - `i++` is the same as `i = i + 1`</span><!-- .element: class="fragment" -->

<span>What does this log out?</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

Answer:

```js
2
4
8
16
32
64
128
```

<span>In the loop above we counted from 0 to 6 with `i=0; i<7; i++`</span><!-- .element: class="fragment" -->

<span>Which is 7 'indexes' of 0,1,2,3,4,5,6</span><!-- .element: class="fragment" -->

<span>This **zero-based indexing** very common in most programming languages</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

What's the result of running this `for` loop?

```js
for (let counter = 1; counter <= 5; counter++) {
  let text = ""
  for (let j = 1; j <= counter; j++) {
    text += j // x += y means the same as x = x + y
  }
  console.log(text)
}
```

<aside class="notes">
  N/A
</aside>

---

Answer:

```js
1
12
123
1234
12345
```

<span>Because the `text` resets to `""` on each iteration</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

### Emoji Check:

How do you feel about the progress so far?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## The `while` loop

A `while` loop goes round and round til we tell it to stop...

<span>...unlike `for` loops, which are bounded.</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

## `while` loop example

Here's a loop:

```js
let rabbits = 2
while (true) {
  rabbits = rabbits * 2
  console.log(rabbits)
}
```

<span>What's the problem with this?</span><!-- .element: class="fragment" -->

<span>Answer: It will loop forever</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

This `while` loop will stop after a few days...

```js
let rabbits = 2
let day = 0
const days = 7
while (day < days) {
  rabbits = rabbits * 2
  console.log(rabbits)
  day = day + 1
}
```

<aside class="notes">
  N/A
</aside>

---

## `do/while`

If we want a loop to always run at least once, we can put the check at the end:

```js
let text = ""
let i = 0
do {
  text += "I have " + i + " zebras "
  console.log(text)
  i++
} while (i < 5)
```

What will that print?

<aside class="notes">
  N/A
</aside>

---

Answer:

```js
I have 0 zebras
I have 0 zebras I have 1 zebras
I have 0 zebras I have 1 zebras I have 2 zebras
I have 0 zebras I have 1 zebras I have 2 zebras I have 3 zebras
I have 0 zebras I have 1 zebras I have 2 zebras I have 3 zebras I have 4 zebras
```

<aside class="notes">
  N/A
</aside>

---

### Emoji Check:

How do you feel about the progress so far?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## `break` and `continue`

There are two more useful tools that can be used when dealing with loops.

<aside class="notes">
  N/A
</aside>

---

### `break`

`break` as the name suggests, is used to break out of a loop

<aside class="notes">
  N/A
</aside>

---

### `continue`

`continue` is used to skip or "jump over" one iteration in a loop

<aside class="notes">
  N/A
</aside>

---

### `break` example

```js
let rabbits = 2
let maxDays = 10
for (let i = 0; i < 100; i++) {
  console.log(rabbits)
  rabbits = rabbits * 2
  if (i >= maxDays) {
    break
  }
}
```

How many days will this let the bunnies reproduce?

<span>Answer: 11 - the loop will run 11 times, multiplying the rabbits 10 times as the log is before the multiplier.</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

#### `continue` example

What numbers do we expect to be printed?

```js
for (let i = 1; i < 20; i++) {
  if (i % 5 === 0 || i % 3 === 0) {
    continue
  }
  console.log(i)
  if (Math.sqrt(i) >= 4) {
    break
  }
}
```

1. &nbsp;&nbsp;&nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16 <!-- .element: class="mcq" -->
1. &nbsp;&nbsp;&nbsp; 1, 2, 4, 7, 8, 11, 13, 14, 16
1. &nbsp;&nbsp;&nbsp; 3, 5, 6, 9, 10, 12, 15

<span>Answer: `1,2,4,7,8,11,13,14,16` - because it skips the 5s and 3s with `continue` and `break`-s for 16</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

### Emoji Check:

How do you feel about the progress so far?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## Functions

If our code gets big we need to separate it into pieces we can manage more easily.

> A function is a JavaScript procedure — a set of statements that performs a task or calculates a value

<aside class="notes">
  N/A
</aside>

---

Consider this code:

```js
function multiply(number1, number2) {
  // We can put as much code as we like in here
  return number1 * number2
}

let bigNumber = multiply(4, 5)
```

<span>`function` - tells JS we are about to define a function</span><!-- .element: class="fragment" -->

<span>`multiply` - the _name_ of the function</span><!-- .element: class="fragment" -->

<span>`(number1, number2)` - the names of the _parameters_ that the function accepts</span><!-- .element: class="fragment" -->

<span>`return <expression>` - the value the function _returns_</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

### Question:

Is this a good function? If not, why not?

```js
function doMaths(a, b, divide) {
  if (divide) {
    return a / b
  } else {
    return a + b
  }
}

let addedUp = doMaths(3, 4, false)
let divided = doMaths(3, 4, true)
```

<aside class="notes">
  N/A
</aside>

---

### What makes a good function?

Good functions:

- Do a single thing
- Have sensible names that make it clear what the function does
- Have sensibly-named parameters that make it clear what the function needs

<aside class="notes">
  N/A
</aside>

---

Better:

```js
function addUp(number1, number2) {
  return number1 + number2
}

function divide(numerator, denominator) {
  return numerator / denominator
}

let addedUp = addUp(3, 4)
let divided = divide(3, 4)
```

<span>Ok, so `number1` and `number2` are not the best examples! ...Naming is hard!</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

### Emoji Check:

How do you feel about the progress so far?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## Refactoring to use functions

If we have some common code, or things we do lots of times, we should make a function for that:

Before refactoring:

```js
console.log("Hello Edward. I hope you're well!")
console.log("Hello Emily. I hope you're well!")
console.log("Hello Mike. I hope you're well!")
```

How might a function for that look?

<aside class="notes">
  N/A
</aside>

---

How about this?

After refactoring:

```js
function greet(name) {
  console.log("Hello " + name + ". I hope you're well!")
}

greet("Edward")
greet("Emily")
greet("Mike")
```

<aside class="notes">
  N/A
</aside>

---

## Functions can call functions

We can use functions within each other, like we can if we nest `if` blocks.

<aside class="notes">
  N/A
</aside>

---

What is the output of running this code?

```js
function printSmallAnimals() {
  console.log("🐁🐤🐞")
}
function printBigAnimals() {
  console.log("🦒🐮")
}
function printAnimals() {
  printBigAnimals()
  printSmallAnimals()
}
console.log("🐟")
printAnimals()
```

1. 🐁🐤🐞🦒🐮🐟
1. 🐟🦒🐮🐁🐤🐞
1. 🦒🐮🐁🐤🐞🐟

<span>Answer: 🐟🦒🐮🐁🐤🐞 </span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

### Emoji Check:

How do you feel about the progress so far?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## Function question...

This code doesn't work. Why not?

```js
function calculateMagicNumber(number1, number2) {
  let magicNumber = number1 + number2
  magicNumber = (magicNumber * number1) / number2
}

// This prints "undefined" for some reason 😡
console.log(calculateMagicNumber(16, 7))
```

<span>Answer: The function does not `return` anything </span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

## Function return values

For functions that are calculating answers, we can `return` those answers to the caller:

```js
function calculateMagicNumber(number1, number2) {
  let magicNumber = number1 + number2
  magicNumber = (magicNumber * number1) / magicNumber
  return magicNumber
}

console.log(calculateMagicNumber(16, 7))
```

<span>This now logs out an answer</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

## Functions can do both

We can also call functions with `return` values within each other:

```js
function addUp(number1, number2) {
  return number1 + number2
}
function divide(numerator, denominator) {
  return numerator / denominator
}
function moreMaths(badName1, badName2) {
  let added = addUp(badName1, badName2)
  let result = divide(added, badName2)
  return result
}
console.log(moreMaths(20, 30))
```

<aside class="notes">
  N/A
</aside>

---

### Emoji Check:

How do you feel about the progress so far?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## Anonymous Functions

As you've probably noticed, there's more than one way of doing things in JS. Declaring functions is not exempt from this:

```js
// Anonymous Function
setTimeout(function (a, b) {
  return a + b
}, 1000)

// Anonymous Arrow Function
setTimeout((a, b) => {
  return a + b
}, 1000)
```

<aside class="notes">
   Don't worry about these too much, they are covered again later
</aside>

---

### Variable assignment

In JS we can assign functions to variables:

```js
// Named Function
function addTwoNumbers(a, b) {
  return a + b
}

// Named Arrow Function
const addTwoNumbers = (a, b) => {
  return a + b
}
```

<aside class="notes">
    N/A
</aside>

---

### Return to ~~sender~~ caller

We can simplify our arrow functions even more by implicitly returning a result:

```js
// Explicit Return
const addTwoNumbers = (a, b) => {
  return a + b
}

// Implicit Return
const addTwoNumbers = (a, b) => a + b
```

<aside class="notes">
    N/A
</aside>

---

### And even further

With only one argument, we can strip the parenthesis altogether, resulting in the shortest function definition you can write.

```js
const double = a => 2 * a

double(10) // 20
```

<aside class="notes">
    N/A
</aside>

---

### Emoji Check:

How do you feel about the progress so far?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## Overview - recap

- How can we write conditional statements?
- How do we write a `for` loop?
- How is a `while` loop different?
- Can you think of why we might combine loops?
- Why do we use functions?
- How do we write good functions?

<aside class="notes">
  N/A
</aside>

---

## Objectives - recap

- Wrote `if` statements and ternary operators
- Wrote `for`, `while` and `do/while` loops
- Saw how to use break and continue in loops
- Learned that functions are manageable pieces of code that (ideally) perform one task
- Learned that functions should be clearly named, and have sensible parameter names
- Learned not forget to 'return' something from functions

<aside class="notes">
  N/A
</aside>

---

<!-- .slide: data-only="njacademy" -->
## Exercises

1. You should have the `exercises.zip` in Slack or email now
1. Unzip the exercises
1. _For your reference, this includes the previous tasks and solutions_
1. Open `problems.html` with your browser (you don't need to edit this file)
1. Open the problem JavaScript files in your text editor
1. Read and complete the exercises in the JavaScript file
1. Each time you complete an exercise, refresh your browser to check your solution

<aside class="notes">
    N/A
</aside>

---

### Emoji Check:

On a high level, do you think you understand the main concepts of this session? Say so if not!

1. 😢 Haven't a clue, please help!
2. 🙁 I'm starting to get it but need to go over some of it please
3. 😐 Ok. With a bit of help and practice, yes
4. 🙂 Yes, with team collaboration could try it
5. 😀 Yes, enough to start working on it collaboratively

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

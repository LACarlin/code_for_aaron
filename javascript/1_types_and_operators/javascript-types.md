---
title: JavaScript - types and operators
---

# JavaScript:

## Types and operators

<aside class="notes">
  N/A
</aside>

---

## Overview

- Data handling in JS
- Use of variables
- Use of expressions

<aside class="notes">
  N/A
</aside>

---

## Objectives

- List some of the types available in JS
- Recognise and write syntax for strings, numbers and booleans
- Initialise variables and constants
- Use operators to work with values and variables
- Use these operators with different types
- Use operator precedence to predict the result of expressions
- Use boolean expressions
- Log some variables for debugging

<aside class="notes">
  N/A
</aside>

---

## Types

There are three common types of data in JavaScript:

- strings (text)
- numbers
- boolean (true or false)

<aside class="notes">
  N/A
</aside>

---

We can write them like this:

```js
// These are all strings
"There are wizards everywhere"
'You are likely to be eaten by a wolf'
`The cave is dark`

// These are both numbers
10
12.2

// These are (the only) booleans
true
false
```

<aside class="notes">
  N/A
</aside>

---

## Operators

Operators combine and manipulate data

<aside class="notes">
  N/A
</aside>

---

## Mathematical operators

There are 6 basic mathematical operators

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `**` Exponentiation
- `%` Modulo

<aside class="notes">
  More in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#operators
</aside>

---

### Exponentiation

> Gives result of raising a number to a power, for example in mathematical notation it is `2^6`

Example:

```js
2**6
```

<span>Answer: `64`</span><!-- .element: class="fragment" -->

<aside class="notes">
   More in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#operators
</aside>

---

### Modulo

> Gives the remainder after the division of one number by another

Example:

```js
8 % 3
```

<span>Answer: `2`</span><!-- .element: class="fragment" -->

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

## Operation (like the game!)

What is the result of this operation:

```js
2**2 * 3 + 6 % 4 / (3 - 1) - 1
```

<!-- markdownlint-disable MD032 -->
1. <!-- .element: class="mcq" -->
`0`
1. `12`
1. `2`
1. `11`
<!-- markdownlint-restore MD032 -->

<span>Answer: `12` from `((2**2) * 3) + ((6 % 4) / (3 - 1)) - 1` </span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

### Operator precedence

You will know this from school as BODMAS
> Brackets, Order, Division, Multiplication, Addition, Subtraction

Orders are an old word for Exponentiation. Modulus is an operator we didn't learn in school and it slots in like this:

> BEMDMAS

> Brackets, Exponentiation, Modulus, Division, Multiplication, Addition, Subtraction

See also the [JavaScript Operator Precedence Table (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table) which has details on this

<aside class="notes">
  N/A
</aside>

---

## String operators

`+` can also be used to concatenate (join) strings

<aside class="notes">
  N/A
</aside>

---

What is the result of this operation?

```js
"My milk tastes of" + "Banana"
```

1. `"My milk tastes ofBanana"`
1. `"My milk tastes of Banana"`
1. `"My milk tastes of+Banana"`
1. `"My milk tastes of`<br>`Banana"`

<span>Answer: `"My milk tastes ofBanana"` </span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

### The problem with plus

What is the result of this operation?

```js
"1" + 2
```

<!-- markdownlint-disable MD032 -->
1. <!-- .element: class="mcq" -->
`"12"`
1. `3`
1. _It crashes_
<!-- markdownlint-restore MD032 -->

<span>Answer: `"12"` as adding things to strings makes a string </span><!-- .element: class="fragment" -->

<aside class="notes">
  When trying to add strings and numbers, JS will first cast the number to a string, then concatenate as with a normal string "+" operation.
</aside>

---

### Boolean operators

There are three boolean operators

- `||` OR
- `&&` AND
- `!` NOT

<aside class="notes">
  N/A
</aside>

---

What is the result of this operation?

```js
true || false
```

1. `true`
1. `false`

<span>Answer: `true`</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

What is the result of this operation?

```js
true || !false && !!false
```

1. `true`
1. `false`

<span>Answer: `true = true || true && false`</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

### Operator precedence

> BNAO
> Brackets, Not, And, Or

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

## Expressions

> An _expression_ is a sequence of operations that can be evaluated to a new value

> _Expressions_ are often used to combine _variables_

We'll show you these in the following **variables** section

<aside class="notes">
  N/A
</aside>

---

## Variables

Variables are how we store values.

> Variables are a bit of your computer's memory we can refer to with a friendly name

```js
let a = 5
let numberOfLights = 256
let countOfLightsOff = 8
```

<aside class="notes">
  N/A
</aside>

---

We can define variables in a few ways:

```js
// Creates a variable that will always be 5.
// If we try to change it later, we will get an error.
const myFavouriteNumber = 5
```

```js
// Creates a variable that initially has the value 0.
// We are able to change this value later.
let numberOfDinosaurs = 0
```

```js
// What we used to use before let. Use let now.
var theLoneliestNumber = 1
```

```js
// Don't do this.
// Always declare your variable before trying to set it.
badNumber = 13
```

<aside class="notes">
  N/A
</aside>

---

We update variables like this:

```js
myVariable = <some expression>
```

Example:

```js
myVariable = 180 + myVariable + 2
```

> This is a simple _expression_

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

What is the result of running this code?

```js
let a = 5
let b = a + 1
a = 7

console.log(b)
```

<!-- markdownlint-disable MD032 -->
1. <!-- .element: class="mcq" -->
 `6`
1. `8`
1. `"51"` (text)
<!-- markdownlint-restore MD032 -->

<span>Answer: `6`</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

Maths Example:

```js
const myAge = 21
const yourAge = 63
const secondsInAYear = 31536000

let averageAgeInSeconds = ((myAge + yourAge)/2) * secondsInAYear

console.log(averageAgeInSeconds);
```

<span>Answer: It's not important: it's an example of an arbitrary expression!</span><!-- .element: class="fragment" -->

<aside class="notes">
  Bring the answer up after a few seconds
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

## Logging

We saw `console.log(sometext)` above.

We can also log variables to help us debug our apps

```js
let averageAge = 21

console.log(averageAge)
console.log("averageAge=" + averageAge)
```

We can also log a sequence of things:

```js
console.log("this", "many", "dinosaurs")
```

<aside class="notes">
  Take a moment to describe the subtleties here
</aside>

---

## More logging

We saw `console.log(sometext)` above.

We can also use backticks for string interpolation:

```js
console.log(`Data: averageAge=${averageAge}`)
```

Later on we will encounter data types (like objects and arrays) that don't usually render nicely as strings, so we can log them separately:

```js
const message = `data: averageAge=${averageAge}, myObject=`
const myObject = { "Hello": "Academy" }

console.log(message, myObject)
```

<aside class="notes">
  Take a moment to describe the subtleties here.

  Mention why "message" is in a variable and myObject is logged outside the interpolated string
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

## Extra assignment operators

Equals (`=`) is the main _assignment operator_ - it sets a value into a variable.

There are a few extra common operators:

- `x += y` is the same as `x = x + y`
- `x -= y` is the same as `x = x - y`
- `x++` This adds one i.e. `x = x + 1`
- `x--` This subtracts one i.e. `x = x - 1`

There are more at [JavaScript Operators Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#operators)

<aside class="notes">
  There are more over at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#operators - show them the page
</aside>

---

### Plus-equals example

These operators work with strings as well, though you may get some odd results with `-`!

```js
let text = "My Zebra"
text+= "has stripes"
console.log(text)
```

What does this log?

<span>Answer: `My Zebrahas stripes` as we forgot the space!</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

Here's another example:

```js
let text = "My Bunnies"
text+= " are very numerous on day 7"
console.log("${text}")
```

What does this log?

<span>Answer: The literal characters `${text}` as we forgot the backticks!</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

Let's do that again

```js
let text = "my bunnies"
text+= " are numerous!"
console.log(`I love that ${text}`)
```

What does this log?

<span>Answer: `I love that my bunnies are numerous!`</span><!-- .element: class="fragment" -->

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

## Exercises - 10 mins

- The Instructor will now show you the exercises and live code the first one.

<aside class="notes">
  Instructor does first one with screen share to demonstrate

</aside>

---

<!-- .slide: data-only="njacademy" -->
## Exercises

1. You should have the `exercises.zip` in Slack or email now
1. Unzip the exercises
1. Open `problems.html` with your browser (you don't need to edit this file)
1. Open the problem JavaScript files in your text editor
1. Read and complete the exercises in the JavaScript file
1. Each time you complete an exercise refresh your browser to check your solution

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

- What are the three common data types in JS?
- Which operators can you remember?
- What about the operator precedence?
- What are variables used for?
- What are expressions?

<aside class="notes">
  N/A
</aside>

---

## Objectives - recap

- List some of the types available in JS
- Recognise and write syntax for strings, numbers and booleans
- Initialise variables and constants
- Use operators to work with values and variables
- Use these operators with different types
- Use operator precedence to predict the result of expressions
- Use boolean expressions
- Log some variables for debugging

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

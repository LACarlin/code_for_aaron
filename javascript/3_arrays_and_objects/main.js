// This is an empty array
const emptyArray = [];

// This is an array of numbers
const position = [0, 1];

// This is an array of strings
const myFavouriteFruit = ["banana", 'apple', `kiwi`];

// This is an array of a bunch of different things
const mixedBag = ["banana", 12, false];

// We can access an element in an array using its index
console.log(myFavouriteFruit[1]); // "apple" - because we start counting from 0!

// What is the output from this code?
const myFavouriteSnacks = ["crisps", "chocolate", "apples"];
console.log(myFavouriteSnacks[0]);

// We can modify values in an array in a similar way
myFavouriteSnacks[1] = "celery"

console.log(myFavouriteSnacks)

// What is the result of running this code?
const farm = ["🐄","🐖","🐑","🦆"]

const farmButTheDuckDied = farm
farmButTheDuckDied[3] = "🍗"

console.log(farm) // farm and farmButTheDuckDied are the same array in memory - the names are references to the array

// Arrays have lots of methods that help us work with them. For example, 'push' adds an item to the end of an array
farm.push("🦄")

console.log(farm)

// 'pop' removes the last item
const lastAnimalAdded = farm.pop()

console.log(farm)
console.log(lastAnimalAdded)

// To remove the first item we can use 'shift
console.log(farm)
console.log(firstAnimalShifted)

// There are lots of other array methods. See what these do
 const someFruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 const citrus = someFruits.slice(3);

 const someOtherFruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 const anotherCitrus = someOtherFruits.slice(1, 3);

 const lotsOfFruits = ["Banana", "Orange", "Apple", "Mango"];
 lotsOfFruits.sort();

 const points = [40, 100, 1, 5, 25, 10];
 points.sort();
 points.sort(function(a, b){return a - b});

 const fruitsAgain = ["Banana", "Orange", "Apple", "Mango"];
 const splicedFruits = fruitsAgain.splice(2, 2, "Lemon", "Kiwi");

 const moreFruits = ["Banana", "Orange", "Apple", "Mango"];
//  first argument where to start, second argument how many
 moreFruits.splice(0, 1);

 // https://www.w3schools.com/js/js_array_methods.asp
 // https://www.w3schools.com/js/js_array_sort.asp

// - `concat` -- joins two arrays together
// - `includes` -- returns true if the array contains the given value
// - `indexOf` -- returns the position of the element in the array
// - `join` -- joins all elements of an array into a string
// - `reverse` -- reverses the order of elements in an array
// - `slice` -- selects and returns part of an array
// - `sort` -- sorts the elements of an array
// - `splice` -- deletes and adds elements to the array in a single operation
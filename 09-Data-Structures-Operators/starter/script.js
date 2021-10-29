'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


console.log("Strings pat 1 ....................................")


const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(airline.length);
console.log('B320'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.lastIndexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // we can spaceify start and end of string

// extracting unknown strings

console.log('extracting unknown strings.......................')

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(0, airline.lastIndexOf(' ')));
console.log('Slice()...........................................')

// console.log(airline.slice(-2));

// The slice() method returns selected elements in an array, as a new array.

// slice() selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

// slice() does not change the original array.

console.log(airline.slice(1, -1)); 

const checkMiddleSeat = seat => {
  // B and E middel seats
  // to extract the last caracter we use the -1
  const s = seat.slice(-1);
  
  if (s === 'B' || s === 'E') {
    console.log('Middel Seat');
  } else {
    console.log('Not middel seat');
  }  {

  }
};

checkMiddleSeat('11B');
checkMiddleSeat('11C');
checkMiddleSeat('11F');
checkMiddleSeat('11E');



// second element is not needed

let arr = ['Samuel','Gref'] 

let [firstName,lastName] = arr 

let [a,b,c,d,e,f] = firstName

console.log(typeof a,b,c,d,e,f)


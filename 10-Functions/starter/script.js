'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const trarnsformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`transformed string ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
};

trarnsformer('JavaScript is th best!', upperFirstWord);
trarnsformer('JavaScript is th best!', oneWord);

const greet = function (gretting) {
  return function (name) {
    console.log(`${gretting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('samuel');
// or
greet('Hello')('Samuel');

// Arr function 1

const greet1 = gretting1 => name1 => console.log(`${gretting1} ${name1}`);

greet1('Hello')('Lidu');

// Arr Function 2

const greet2 = gretting2 => {
  return name2 => {
    console.log(`${gretting2} ${name2}`);
  };
};

greet2('Hello')('Tame');

// the call and apply Metods

const lufthansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],
  // book: function()
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(234, 'Tamer Adane');
lufthansa.book(244, 'Samuel Gref');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// dosen Not Work
// book(234,'Sara melaku')

// call method

book.call(eurowings, 23, 'Tigist Ayele');
console.log(eurowings);
book.call(lufthansa, 234, 'Sara Melaku');

const swiss = {
  airline: 'Swiss airline',
  iataCode: 'Lx',
  bookings: [],
};

// Apply Method

const flightDdata = [658, 'Henok Hayle'];

book.apply(swiss, flightDdata);
// same as this spread operrater
book.call(swiss, ...flightDdata);

console.log(swiss);
console.log(eurowings);

// bind methed

const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');

// we can explicitly asign the argument
const book23 = book.bind(eurowings, 60);
book23('Martha Samuel')

const myName = 'john'

function first ()  {
    const age = 30

if (age >= 30) {
    const decade  =  30
    var millenial  = true
}
// scopes has access Form outer scope. 
function second() {
    const job = 'teacher'
    console.log(`${myName} is a ${age } yearsold ${job}`) //  variable look up  in ascope chain 
}
second()
}

first()

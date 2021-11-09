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


};

const openingHours = {
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
}


const entries = Object.entries(openingHours)

for (const [key,{open,close}] of entries) {
  console.log(`on ${key} we are at${open} and close at ${close}`)
} 




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

console.log('String lowerCase and upperCase...........................................')



console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

//Fix capitalization in name previous

const passenger  = {
  firstName: 'saMuel',
  LastName:'gref'
}


// const passengerLower = passenger.firstName.toLowerCase()

// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)


// console.log(passengerLower)

// console.log(passengerCorrect)
// console.log(passengerCorrect)



const capitalization = (name,) => {

  const passenger = name

   const passengerLower = passenger.toLowerCase()

  const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1) 

  return console.log(passengerCorrect)

}

capitalization('samuel')
capitalization('gref')

// compairing Email

const email = 'hell0@samgref.io '
const loginEmail = 'hello@samGref.io \n'

const lowerEmail = loginEmail.toLowerCase()
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail)

// 2nd why of triming 

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)
console.log(email === normalizedEmail)


// replacing 
const priceGB = '288,97%'
// the first argument is the one we want to replace and the seconud the replacemnet  
const priceUS = priceGB.replace('%', '$').replace(',','.')
console.log(priceUS)

const announcement = 'All passengers come to dore 23. Nording dore 23'

console.log(announcement.replaceAll('dore','gate'))

// regx

console.log(announcement.replace(/dore/g,'gate'))

// Booleans 
const planes = 'A320neo'

console.log(planes.includes('A320'))
console.log(planes.includes('Boieng'))
console.log(planes.startsWith('A'))
console.log(planes.endsWith('eo'))

// Split and Join 

console.log('a+very+nice+string'.split('+'))
console.log('Samuel Gref'.split(' ')) 

const [firstName,lastName] = 'Samuel Gref'.split(' ')

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName) 

const pasengers = 'samuel gref'  

const capitalizeName = function (name) {
  const names = name.split(' ')
  const namesUpper = []
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1))
    namesUpper.push(n.replace(n[0],n[0].toUpperCase()));

  }
  console.log(namesUpper.join(' '))
  
}


capitalizeName('jessica ann smith davis')
capitalizeName('samuel gref smith')


// padding String 
const message = 'Go to gate 23'
console.log(message.padStart(20,'+').padEnd(30, '+'))
console.log('samuel'.padStart(20,'+').padEnd(30, '+'))


const maskCreditCard = function(number) {
  const str  = number +  '';
  const last = str.slice(-4)

  return last.padStart(str.length, '*')
}

console.log(maskCreditCard(3456467965967))

//  repeat string 

const message2 = 'Bad weater... All departures Delayed....'

console.log(message2.repeat(5))


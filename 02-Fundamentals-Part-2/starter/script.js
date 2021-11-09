// loops fro

// for loop running while condition is true

// for (let i = 1; i <= 6; i++) {
//   console.log(`lifeting ${i}`);
// }

time = 20

if (time <= 10) {
    console.log('gm')
  } else if (time >=20) {
    console.log('gd')
  } else {
    console.log(gn)
  }


// The JavaScript for in statement loops through the properties of an Object:

// for (key in object) {
//   // code block to be executed
// } 


const jonas = 
   ['Michael', 'Peter', 'Steven',['Michel','Piter']]


for (let i = jonas.length - 1; i >= 0; i--) {

  console.log(jonas[i])
}


//while loop The do...while statement repeats until a specified condition evaluates to false.



let rep =1 
while ( rep <= 10) {
console.log(`repeat ${rep}`)
rep ++ 
}

// do while 

// let i = 0;
// do {
//   i ++
//   console.log(i);
// } while (i < 5);

// let num = 0


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays]: {
    open: 12,
    close: 22,
  },
  [weekdays]: {
    open: 11,
    close: 23,
  },
  [weekdays]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};




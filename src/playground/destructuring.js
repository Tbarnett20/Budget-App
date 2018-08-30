// Object Destructuring {}

/*

const person = {
  name: 'Terrance',
  age: 24,
  location: {
    city: 'Morehead',
    temp: 90
  }
}; 

const {name: firstName = 'Anonymous', age} = person;
// const name = person.name;
// const age = person.age;
console.log(`${firstName} is ${age}.`)

const {city, temp: temperature} = person.location
if (city && temperature){
  console.log(`It's ${temperature} in ${city}`)
}

const book = {
  title: 'Ego is the Enenmy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
};

// const {title, author, publisher} = book
const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName)

*/

// Array Destructuring []

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// remove name but keep comma to remove an array item we dont need
const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75',];

const [coffee, small, medium, large] = item
console.log(`A medium ${coffee} costs ${medium}`)
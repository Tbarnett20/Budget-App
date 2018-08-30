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

const {title, author, publisher} = book
const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName)
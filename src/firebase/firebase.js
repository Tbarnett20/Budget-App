import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDFstkUxgm5M5upDDYKvWkQBsvJ_hdwGgY",
    authDomain: "frugally-c4753.firebaseapp.com",
    databaseURL: "https://frugally-c4753.firebaseio.com",
    projectId: "frugally-c4753",
    storageBucket: "frugally-c4753.appspot.com",
    messagingSenderId: "639527083460"
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};
//  child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

//  child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

//  child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//    snapshot.forEach((childSnapshot) => {
//      expenses.push({
//        id: childSnapshot.key,
//        ...childSnapshot.val()
//      });
//    });

//    console.log(expenses);
// })




// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'Rent for the month',
//   amount: 150000,
//   createdAt: 3253463456
// })

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })


// Fetching data
/*
database.ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data', e);
  })
 */


/*
 database.ref().set({
  name: 'Terrance Danckert',
  age: 24,
  stressLevel: 7,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  location: {
    city: 'Morehead',
    country: 'United States'
   },
 }).then(() => {
     console.log('Data is saved!');
 }).catch((e) => {
     console.log('This failed.' , e);
 });
  */

  // Updating Data
/*
 database.ref().update({
     stressLevel: 9,
     'job/company': 'Amazon',
     'location/city': 'Seattle'
 })
 */

// database.ref()
//  .remove()
//  .then(() => {
//      console.log('Data was removed');
//  }).catch((e) => {
//      console.log('Did not remove data', e);
//  })
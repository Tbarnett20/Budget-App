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

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
})



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
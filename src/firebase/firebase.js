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

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
})

// database.ref()
//  .remove()
//  .then(() => {
//      console.log('Data was removed');
//  }).catch((e) => {
//      console.log('Did not remove data', e);
//  })
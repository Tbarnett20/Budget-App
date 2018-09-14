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
    age: 23,
    isSingle: false,
    location: {
        city: 'Morehead',
        country: 'United States'
    },
});

// database.ref().set('This is my data');

database.ref('age').set(24);
database.ref('location/city').set('Orlando');
database.ref('attributes').set({
    height: 70,
    weight: 200,

});

console.log('I made a request to change the data');
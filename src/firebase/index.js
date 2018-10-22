import firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "slackie-dev.firebaseapp.com",
    databaseURL: "https://slackie-dev.firebaseio.com",
    projectId: "slackie-dev",
    storageBucket: "slackie-dev.appspot.com",
    messagingSenderId: "211827015381"
};

firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

export default db;
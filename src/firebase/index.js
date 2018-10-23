import firebase from 'firebase';
import env from '../environment/environment';

const config = {
    apiKey: env.FIREBASE_KEY,
    authDomain: "slackie-dev.firebaseapp.com",
    databaseURL: "https://slackie-dev.firebaseio.com",
    projectId: "slackie-dev",
    storageBucket: "slackie-dev.appspot.com",
    messagingSenderId: "211827015381"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

export const auth = firebase.auth();

export const getUser = () => {
    console.log(firebase.auth().currentUser);
}

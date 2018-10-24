import {auth, getUser} from "..";

export const createUser = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).then(res => {
        alert('user has been created');

        // create user with the user id here
        getUser();
    }, err => {
        alert("error creating");
        console.log(err);
    });
}

export const signin = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then(res => {
        alert('signed in successfully');
        getUser();
    }, err => {
        alert('error signing in');
        console.log(err);
    })
}

export const logout = () => {
    auth.signOut().then(res => {
        alert('logged out');
    }, err => {
        alert('error logging out');
        console.log(err);
    })
}
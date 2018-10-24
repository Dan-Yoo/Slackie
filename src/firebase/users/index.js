import {db} from "../index";
export const usersRef = db.collection("users");

export const createUser = (id, username) => {
    // create user with the id
    usersRef.doc(id).set({
        username: username
    });
}
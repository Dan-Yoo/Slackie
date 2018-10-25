import {db} from "../index";
import { doc, collection } from "rxfire/firestore";
import { map, shareReplay } from "rxjs/operators";
export const usersRef = db.collection("users");

export const createUser = (id, username, email) => {
    // create user with the id
    return usersRef.doc(id).set({
        username: username,
        email: email
    });
}

export const updateUser = (id, obj) => {
    return usersRef.doc(id).update(obj);
}

export const getUser = (id) => {
    return doc(usersRef.doc(id)).pipe(
        map(
            res => res.data()
        ),
        shareReplay()
    );
}

export const getAllUsers = () => {
    return collection(usersRef).pipe(
        map(docs => {
            let userMap = {};

            for (let user of docs) {
                userMap[user.id] = user.data();
            }

            return userMap;
        }),
        shareReplay()
    );
}
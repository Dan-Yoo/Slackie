import db from "../index";
import firebase from "firebase";
import { collection } from 'rxfire/firestore';
import { map, shareReplay } from 'rxjs/operators';

export const messagesRef = db.collection("messages");

export const addMessage = (message, author) => {
    return messagesRef.add({
        message: message,
        author: author,
        created: firebase.firestore.FieldValue.serverTimestamp()
    });  
}

export const getMessages = () => {
    return collection(messagesRef.orderBy('created', 'asc'))
        .pipe(
            map(docs => docs.map(d => d.data())),
            shareReplay()
        );
}
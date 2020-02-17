import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDLK0fHDMP9Jce3ifZ1agoAxwoeqxP67rQ",
    authDomain: "b-side-review.firebaseapp.com",
    databaseURL: "https://b-side-review.firebaseio.com",
    projectId: "b-side-review",
    storageBucket: "gs://b-side-review.appspot.com",
    messagingSenderId: "99363105763",
    appId: "1:99363105763:web:fadb2aafd230a9896a8ed6",
    measurementId: "G-8ZESD6MGSQ"
};

firebase.initializeApp(firebaseConfig);
const ref = firebase.storage().ref();

export default ref 
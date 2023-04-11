import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDPJG-OjC2mQwKNg4mNgqRq6aE67nb4mUI",
    authDomain: "tarea-jala-porfa.firebaseapp.com",
    databaseURL: "https://tarea-jala-porfa-default-rtdb.firebaseio.com",
    projectId: "tarea-jala-porfa",
    storageBucket: "tarea-jala-porfa.appspot.com",
    messagingSenderId: "458371736915",
    appId: "1:458371736915:web:7dd3e3a96fd1bede98eda6"
};

firebase.initializeApp(firebaseConfig);
export const db =firebase.firestore;
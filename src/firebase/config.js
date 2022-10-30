import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA09vUCQBTAI0O80B2PgkalnMVk0Yhwmc0",
    authDomain: "firegram-ec845.firebaseapp.com",
    projectId: "firegram-ec845",
    storageBucket: "firegram-ec845.appspot.com",
    messagingSenderId: "32611165473",
    appId: "1:32611165473:web:9c2cc344ada5b0ed720a60",
    measurementId: "G-8GBWTQXHV9"
};

//initialize Firebase

initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };

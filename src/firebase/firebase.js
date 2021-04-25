import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHMssSKYF6eMonpHmtDYHLcO8JXjI5MKU",
    authDomain: "minggu11-21213.firebaseapp.com",
    projectId: "minggu11-21213",
    storageBucket: "minggu11-21213.appspot.com",
    messagingSenderId: "1020016093328",
    appId: "1:1020016093328:web:978c441a5611ea8cea5015",
    measurementId: "G-V7J365DH8L"
  };

  export const myFirebase = firebase.initializeApp(firebaseConfig);
  const baseDb = myFirebase.firestore();
  export const db = baseDb;
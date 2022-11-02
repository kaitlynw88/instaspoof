// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCBf87mqd_j17h2hW9C0jTFybtL0Ok7JM",
    authDomain: "instagramclone-e86f8.firebaseapp.com",
    databaseURL: "https://instagramclone-e86f8-default-rtdb.firebaseio.com",
    projectId: "instagramclone-e86f8",
    storageBucket: "instagramclone-e86f8.appspot.com",
    messagingSenderId: "81159748956",
    appId: "1:81159748956:web:ed6323e90e595f04ec9599",
    measurementId: "G-RXK13PHM31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

// export default firebaseConfig;
const firebase = initializeApp(firebaseConfig);
export const db = getDatabase(firebase);
// export const auth = getAuth(firebase);
// export const provider = new GoogleAuthProvider();
export default firebase;
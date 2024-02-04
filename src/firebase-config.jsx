// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPB9kTiT5Iv0D78nbUwd3S1LGykQKgMDY",
  authDomain: "leanin5-4c887.firebaseapp.com",
  projectId: "leanin5-4c887",
  storageBucket: "leanin5-4c887.appspot.com",
  messagingSenderId: "913302605911",
  appId: "1:913302605911:web:9f8de0b802ea2b0ee71312",
  measurementId: "G-46ZEX0372S"
};

/* const firebaseConfig = {
  apiKey: "AIzaSyD6E8kuF-tTek3qqT1DzuqjJ06plrohd5U",
  authDomain: "aurelians-1b73f.firebaseapp.com",
  projectId: "aurelians-1b73f",
  storageBucket: "aurelians-1b73f.appspot.com",
  messagingSenderId: "745350099760",
  appId: "1:745350099760:web:05a286cd5825bf7c624ef5",
  measurementId: "G-LBG6TW09VS"
}; */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const auth = getAuth(app)
export const provider =new GoogleAuthProvider();
export const storage=getStorage(app)
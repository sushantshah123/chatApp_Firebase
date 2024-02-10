
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBED_XG-UXXAS73Kfy0_AJVCkQK-6HTMDo",
  authDomain: "instantchat-9ee95.firebaseapp.com",
  projectId: "instantchat-9ee95",
  storageBucket: "instantchat-9ee95.appspot.com",
  messagingSenderId: "851264795376",
  appId: "1:851264795376:web:ab731dcbbdd054716e8835"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
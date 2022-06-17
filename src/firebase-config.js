// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAK_8Z6OxCm8dmGOB7zUZh9rCuZWGs_zYI",
  authDomain: "todo-list-be7b7.firebaseapp.com",
  projectId: "todo-list-be7b7",
  storageBucket: "todo-list-be7b7.appspot.com",
  messagingSenderId: "251500422802",
  appId: "1:251500422802:web:cccc8cd46d71f25f09e84b",
  measurementId: "G-J7BZRBRLVH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
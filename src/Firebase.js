// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOQ4HiSREr5mxo7uGz-c92CNE2czeHcbk",
  authDomain: "todo-app-yt-76e11.firebaseapp.com",
  projectId: "todo-app-yt-76e11",
  storageBucket: "todo-app-yt-76e11.appspot.com",
  messagingSenderId: "708477019385",
  appId: "1:708477019385:web:67b8bfc3ced1c9468f6e28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
export default app;

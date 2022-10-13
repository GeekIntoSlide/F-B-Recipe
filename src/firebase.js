// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo3iT0NDRvJRakgUOIleZxNOkwu0Xuenw",
  authDomain: "f-and-b-recipe.firebaseapp.com",
  projectId: "f-and-b-recipe",
  storageBucket: "f-and-b-recipe.appspot.com",
  messagingSenderId: "636597369768",
  appId: "1:636597369768:web:9bd954452bc59f77807b9d",
  measurementId: "G-34CYSS2JMB"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

 export const db=getFirestore();
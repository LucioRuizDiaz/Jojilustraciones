import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_meGjKvGKnXB1v2LNaWfPq-m4TLoYXIk",
  authDomain: "jojilustraciones.firebaseapp.com",
  projectId: "jojilustraciones",
  storageBucket: "jojilustraciones.appspot.com",
  messagingSenderId: "256292478523",
  appId: "1:256292478523:web:e940f2c3d6a11df9cf461e",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);

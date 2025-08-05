// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import{ getStorage } from "firebase/storage";

  const firebaseConfig = {
  apiKey: "AIzaSyChms2VCIW7Y1P4Wh6s5fEFK_USYTPTB7c",
  authDomain: "miakpo-do.firebaseapp.com",
  projectId: "miakpo-do",
  storageBucket: "miakpo-do.firebasestorage.app",
  messagingSenderId: "130241347583",
  appId: "1:130241347583:web:4b09a902bc55f27d3c71ca",
  measurementId: "G-3GP8C9P63L"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
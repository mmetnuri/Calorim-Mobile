// app/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBc0_QZz7L9ZwkZoeKLRCZ0ShvPTCWKMtI",
    authDomain: "calorim.firebaseapp.com",
    projectId: "calorim",
    storageBucket: "calorim.firebasestorage.app",
    messagingSenderId: "561142385182",
    appId: "1:561142385182:web:3bcb20a44aaf3544f7bc0f",
    measurementId: "G-ZEGSLJK5VW"
  };
// Firebase başlatma
const app = initializeApp(firebaseConfig);

// Auth ve Firestore için export et
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
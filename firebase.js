// Importações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// COLE AQUI SUA CONFIGURAÇÃO DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCVVqjYzHimFPKMHLiQ7fLAfWWPXkMrWko",
  authDomain: "parceiros-70500.firebaseapp.com",
  projectId: "parceiros-70500",
  storageBucket: "parceiros-70500.firebasestorage.app",
  messagingSenderId: "946228473553",
  appId: "1:946228473553:web:d4c95de55add2138d01ff0",
  measurementId: "G-ZQZYZZBJPZ"
};

// Inicializa
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

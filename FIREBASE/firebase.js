import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_CONFIG,
  authDomain: "auth-starter-3794b.firebaseapp.com",
  projectId: "auth-starter-3794b",
  storageBucket: "auth-starter-3794b.firebasestorage.app",
  messagingSenderId: "290518653605",
  appId: "1:290518653605:web:ef78498fa7d1626d9e0b4c",
  measurementId: "G-JFFVGGH23B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };


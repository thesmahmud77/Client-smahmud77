// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwJvtxI9Yy9b28_jprBQmxaw2_T6V_hVk",
  authDomain: "smahmud77-79393.firebaseapp.com",
  projectId: "smahmud77-79393",
  storageBucket: "smahmud77-79393.firebasestorage.app",
  messagingSenderId: "184240912657",
  appId: "1:184240912657:web:a5d8bcb2ad0a05400e74b0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

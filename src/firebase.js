import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (replace with your details)
const firebaseConfig = {
    apiKey: "AIzaSyAM88VhheoSWbYTdogyuWQEXEmRh1MiuFI",
  authDomain: "medisync-de0fd.firebaseapp.com",
  projectId: "medisync-de0fd",
  storageBucket: "medisync-de0fd.appspot.com",
  messagingSenderId: "912092906289",
  appId: "1:912092906289:web:79c23171a63d93d8de6610",
  measurementId: "G-JE676NB5PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export initialized services for use across your app
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYypprPnjTFlCzbrPcfvbHEM8ICIWGPcM",
  authDomain: "rohitblogz.firebaseapp.com",
  projectId: "rohitblogz",
  storageBucket: "rohitblogz.appspot.com",
  messagingSenderId: "832689415551",
  appId: "1:832689415551:web:07391ae440aba1b6f9264a",
  measurementId: "G-FV4JVJC0NL",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

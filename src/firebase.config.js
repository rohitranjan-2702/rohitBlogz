import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "rohitblogz.firebaseapp.com",
  projectId: "rohitblogz",
  storageBucket: "rohitblogz.appspot.com",
  messagingSenderId: "832689415551",
  appId: process.env.REACT_APP_APPID,
  measurementId: "G-FV4JVJC0NL",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

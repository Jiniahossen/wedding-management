
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const all=import.meta.env;


const firebaseConfig = {
  apiKey:all.VITE.apiKey,
  authDomain:all.VITE.authDomain,
  projectId: all.VITE.projectId,
  storageBucket:all.VITE.storageBucket,
  messagingSenderId:all.VITE.messagingSenderId,
  appId:all.VITE.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;
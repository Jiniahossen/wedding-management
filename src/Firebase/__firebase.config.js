// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtICBo_5xY5XvG9dyw_yPaNLEd2YW13MA",
  authDomain: "wedding-event-management.firebaseapp.com",
  projectId: "wedding-event-management",
  storageBucket: "wedding-event-management.appspot.com",
  messagingSenderId: "684005543796",
  appId: "1:684005543796:web:5a586b158ddc99a2286621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
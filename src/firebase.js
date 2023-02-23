// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeAq2NRRsO_JxBEf-UtVGn4k_Ugqul8tY",
  authDomain: "multy-app-bd3c3.firebaseapp.com",
  projectId: "multy-app-bd3c3",
  storageBucket: "multy-app-bd3c3.appspot.com",
  messagingSenderId: "179772000367",
  appId: "1:179772000367:web:d27a199b45205c48ada59a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };

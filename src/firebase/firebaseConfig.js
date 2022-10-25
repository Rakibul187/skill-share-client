// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWBq7u_peGQyXCKHqy33D0WdxSqVMuIHQ",
  authDomain: "skill-share-client.firebaseapp.com",
  projectId: "skill-share-client",
  storageBucket: "skill-share-client.appspot.com",
  messagingSenderId: "195361849731",
  appId: "1:195361849731:web:89486344d4446a503db6b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
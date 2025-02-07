
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyByMTjLQQtDQmECTV6z1j-jjUPRoc78htI",
  authDomain: "react-web-644fc.firebaseapp.com",
  projectId: "react-web-644fc",
  storageBucket: "react-web-644fc.appspot.com",
  messagingSenderId: "141773626874",
  appId: "1:141773626874:web:19248172f17cba212fd843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
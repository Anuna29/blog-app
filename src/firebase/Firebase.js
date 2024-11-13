import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const firebaseConfig = {
  // // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyA3OMFbIITP7zyPIGru8cVMCQEXL3xTD6E",
  authDomain: "blog-app-5d3b5.firebaseapp.com",
  projectId: "blog-app-5d3b5",
  storageBucket: "blog-app-5d3b5.firebasestorage.app",
  messagingSenderId: "796034889813",
  appId: "1:796034889813:web:9e92534a01731ebbdb7cdc"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUpFunction = (firstName, lastName, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(()=>{
    return updateProfile(auth.currentUser,{displayName: `${firstName} ${lastName}`})
  });
};

export const signInFunction = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
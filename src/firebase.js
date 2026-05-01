// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCBKjmXGywefSkdQKuxBSAwmBOqQ-we2lQ",

  authDomain: "be-weekly-3.firebaseapp.com",

  projectId: "be-weekly-3",

  storageBucket: "be-weekly-3.firebasestorage.app",

  messagingSenderId: "343277257918",

  appId: "1:343277257918:web:39f1b984c0e38bad138aef",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

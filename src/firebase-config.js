import {initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// 
const firebaseConfig = {
  apiKey: "AIzaSyCJpSF6WSP4Jv0_VstJibyFIaF8WQZn20c",
  authDomain: "linetour-757c9.firebaseapp.com",
  projectId: "linetour-757c9",
  storageBucket: "linetour-757c9.appspot.com",
  messagingSenderId: "223751207682",
  appId: "1:223751207682:web:e30f5437000a78519aa01b",
  measurementId: "G-7TCBNKKDM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


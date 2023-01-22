import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAz_a7nXcIh0pinagvc70Aghq9XA09jItE",
  authDomain: "devfolio-492eb.firebaseapp.com",
  projectId: "devfolio-492eb",
  storageBucket: "devfolio-492eb.appspot.com",
  messagingSenderId: "527064139642",
  appId: "1:527064139642:web:ea7cab908ebd45c39238c3",
  measurementId: "G-XN0Y8FJN1F",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();

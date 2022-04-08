// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBlaIg9K3x1UjPikqQsO14clzX304uOF3o',
  authDomain: 'router-firebase-integrat-a9769.firebaseapp.com',
  projectId: 'router-firebase-integrat-a9769',
  storageBucket: 'router-firebase-integrat-a9769.appspot.com',
  messagingSenderId: '421089581089',
  appId: '1:421089581089:web:3d0ddfe26e40d0b0e66b60',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

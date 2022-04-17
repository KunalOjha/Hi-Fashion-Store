import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA56j6ENxHuVYfmuoaLuQebfweyO37F2Ig",
    authDomain: "hi-fashion-store.firebaseapp.com",
    projectId: "hi-fashion-store",
    storageBucket: "hi-fashion-store.appspot.com",
    messagingSenderId: "840708936758",
    appId: "1:840708936758:web:352be6f79d2a555a3b7497"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

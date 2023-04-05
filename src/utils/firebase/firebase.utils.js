import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

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

//Instantiate Firestore; allows us to telll Firebase when we want to set/get a db
// Directly points to our DB inside the console
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const { uid } = userAuth?.user;

    // See if there is an existing DocRef
    const userDocRef = doc(db, 'users', uid);

    const userSnapshot = await getDoc(userDocRef);
 
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth?.user;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    
    return userDocRef;
}
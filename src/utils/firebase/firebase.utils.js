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
    setSDoc,
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

export const auth = getAuth(); // instantiate Firestore (points to our db)
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); // instance of a document model

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef) // get document for userDocRef
    console.log(userSnapshot)
    console.log(userSnapshot.exists());

    // if user data does not exist
    // create/set the document with the data from userAuth in my collection

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    // if user data exists
    // return userDocRef

    return userDocRef;
}
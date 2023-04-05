import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const loginGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response);
        console.log(userDocRef);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={loginGoogleUser}>Sign in with Google</button>
        </div>
    )
};

export default SignIn;
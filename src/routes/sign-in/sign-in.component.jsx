import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const loginGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={loginGoogleUser}>Sign in with Google</button>
        </div>
    )
};

export default SignIn;
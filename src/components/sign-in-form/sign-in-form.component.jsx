import './sign-in-form.styles.css';

import FormInput from '../form-input/form-input.component';

import { useState } from 'react';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect Email or Password');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with that Email');
                    break;
                default:
                    console.log(
                        'Error signing in user with email and password. ERRROR DETAILS: ',
                        error
                    );
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-form-container">
            <h2>Already have an Account?</h2>
            <div className="sign-in-p">
                Sign in with your email and password
            </div>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <button type="submit">Sign In</button>
                <button
                    type="button"
                    className="google-sign-in-button"
                    onClick={signInWithGoogle}
                >
                    Sign In With Google
                </button>
            </form>
        </div>
    );
};

export default SignInForm;

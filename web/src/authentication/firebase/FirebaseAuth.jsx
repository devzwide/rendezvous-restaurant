import { getAuth, createUserWithEmailAndPassword, validatePassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebaseApp from "../../config/firebase.config.jsx";

const firebaseAuth = getAuth(firebaseApp);

// eslint-disable-next-line react-refresh/only-export-components
export const signUpWithEmailAndPassword = async (email, password) => {
    try {
        const passwordValidateStatus = await validatePassword(firebaseAuth, password);
        if (!passwordValidateStatus.isValid) {
            const needsLoweCase = passwordValidateStatus.needsLowerCase ? "lowercase letter, " : "";
            const needsUpperCase = passwordValidateStatus.needsUpperCase ? "uppercase letter, " : "";
            const needsNumber = passwordValidateStatus.needsNumber ? "number, " : "";
            const needsSpecialChar = passwordValidateStatus.needsSpecialCharacter ? "special character, " : "";
            const errorMessage = `Password must contain at least one ${needsLoweCase}${needsUpperCase}${needsNumber}${needsSpecialChar}and be at least ${passwordValidateStatus.minLength} characters long.`;
            throw new Error(errorMessage);
        }

        const userCredentials = await createUserWithEmailAndPassword(firebaseAuth, email, password);

        return userCredentials.user;
    } catch (error) {
        console.error("Error signing up user with email and password:", error);
        throw error;
    }
};

export const SignIn = async (email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(firebaseAuth, email, password);
        
        return userCredentials.user;
    } catch (error) {
        console.error("Error signing in user with email and password:", error);
        throw error;
    }
};

// eslint-disable-next-line react-refresh/only-export-components
export const signOutUser = async () => {
    try {
        await signOut(firebaseAuth);
    } catch (error) {
        console.error("Error signing out user:", error);
        throw error;
    }
};

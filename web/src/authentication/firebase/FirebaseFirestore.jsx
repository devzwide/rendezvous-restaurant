import { addDoc, collection, getFirestore } from "firebase/firestore";
import firebaseApp from "../../config/firebase.config.jsx";

const firebaseFirestore = getFirestore(firebaseApp);

export const newUser = async (userDoc) => {
    try {
        const userDocRef = await addDoc(collection(firebaseFirestore, "users"), userDoc);
        return userDocRef;
    } catch (error) {
        console.error("Error creating new user in Firestore:", error);
        throw error;
    }
};

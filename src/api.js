
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where
} from "firebase/firestore/lite"


const firebaseConfig = {
    apiKey: "AIzaSyB-2GLUO8XrNnsi3sxW3LQGqL3dvrbuv1M",
    authDomain: "hobbylife-7170e.firebaseapp.com",
    projectId: "hobbylife-7170e",
    storageBucket: "hobbylife-7170e.appspot.com",
    messagingSenderId: "497025191196",
    appId: "1:497025191196:web:7fffad375a1dc1e8057ed9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const hobbiesCollectionRef = collection(db, "hobbies")

export async function getHobbies() {
    try {
        //throw new Error("Simulated error fetching data");
        const snapshot = await getDocs(hobbiesCollectionRef)
        const hobbies = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
        return hobbies

    } catch (error) {
        // Create a new Error object and attach additional properties
        const customError = new Error("Failed to fetch hobbies")
        customError.statusText = error.message
        customError.status = error.code || error.name || "Unknown Error"

        throw customError // Throwing an Error object complies with ESLint
    }
}


export async function getHobby(id) {
    try {
        const docRef = doc(db, "hobbies", id);
        const snapshot = await getDoc(docRef);

        return {
            ...snapshot.data(),
            id: snapshot.id
        };
    } catch (error) {
        // Create a new Error object and attach additional properties
        const customError = new Error("Failed to fetch hobby");
        customError.statusText = error.message;
        customError.status = error.code || error.name || "Unknown Error";

        throw customError; // Throwing an Error object complies with ESLint
    }
}
export async function getTeacherHobbies() {
    try {
        const q = query(hobbiesCollectionRef, where("hostId", "==", "123"));
        const snapshot = await getDocs(q);
        const hobbies = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        return hobbies;
    } catch (error) {
        // Create a new Error object and attach additional properties
        const customError = new Error("Failed to fetch hobbies");
        customError.statusText = error.message;
        customError.status = error.code || error.name || "Unknown Error";

        throw customError; // Throwing an Error object complies with ESLint
    }
}

export async function loginUser(creds) {
    try {
        const q = query(collection(db, "user"), where("email", "==", creds.email), where("password", "==", creds.password));
        const snapshot = await getDocs(q);
        const userDoc = snapshot.docs[0];
        return {
            user: {
                email: userDoc.data().email,
                name: userDoc.data().name,
                id: userDoc.id
            },
            token: "Enjoy your pizza, here's your tokens."
        }
    } catch (error) {
        throw {
            message: "No user with those credentials found!",
            statusText: "Unauthorized",
            status: 401
        };
    }
}